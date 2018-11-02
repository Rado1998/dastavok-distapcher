import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { MainService } from '../main.service';
import { User } from '../../../models/models';
import { Subscription } from 'rxjs';
import { ProfileService } from './profile.service';


@Component({
    selector: 'profile-view',
    templateUrl: 'profile.view.html',
    styleUrls: ['profile.view.scss']
})
export class ProfileView implements OnInit, OnDestroy {
    private _getUserSubscription: Subscription = new Subscription();
    private _changeSubscription: Subscription = new Subscription();
    private _userInfo: User = new User();
    private _editable: boolean = false;
    public profileForm: FormGroup;
    public localImage: string = '/assets/images/avatar.png';


    constructor(
        private _mainService: MainService,
        private _profileService: ProfileService,
        private _fb: FormBuilder,
        @Inject('BASE_URL') private _baseUrl: string
    ) { }

    ngOnInit() {
        this._formBuilder();
        this._getUser();
    }

    private _formBuilder(): void {
        this.profileForm = this._fb.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            phoneNumber: [null, Validators.required],
            email: [null, Validators.required],
            imagePath: [null, Validators.required]
        })
        this.profileForm.disable();
    }

    private _getUser(): void {
        this._getUserSubscription = this._mainService.getUser().subscribe((response: User) => {
            this._userInfo = response;
            this.profileForm.patchValue({
                firstName: this._userInfo.firstName,
                lastName: this._userInfo.lastName,
                phoneNumber: this._userInfo.phoneNumber,
                email: this._userInfo.email,
                imagePath: this._userInfo.imagePath
            })
        })
    }

    private _setFormParams(): void {
        this._editable = !this._editable;
        if (this._editable)
            this.profileForm.enable();
        else
            this.profileForm.disable();
    }

    private _changeUser(): void {
        this._changeSubscription = this._profileService.changeUser(this.profileForm.value).subscribe((response) => {
            console.log(response);
        })
    }

    public onClickEdit(): void {
        this._setFormParams();
    }

    public changeFile(event): void {
        if (event) {
            let reader = new FileReader()
            reader.onload = (e: any) => {
                this.localImage = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    public onClickSave(): void {
        if (this.profileForm.valid) {
            this._changeUser();
        }
    }

    public setUserImage(): object {
        let styles = {
            'background-image': `url(${this.localImage})`
        }
        if (this._userInfo.imagePath)
            styles["background-image"] = `${this._baseUrl}/static/${this._userInfo.imagePath}`;
        return styles;

    }


    ngOnDestroy() {
        this._getUserSubscription.unsubscribe();
        this._changeSubscription.unsubscribe();
    }
}