import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { MainService } from '../main.service';
import { User, ServerResponse } from '../../../models/models';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { ProfileService } from './profile.service';
import { FileValidator } from '../../../validators/file.validator';
import { MessageService } from 'primeng/components/common/messageservice';


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
    private _userImage: Event;
    public serverMessage: string;
    public loading: boolean = false;
    public profileForm: FormGroup;
    public localImage: string = '/assets/images/avatar.png';


    constructor(
        private _mainService: MainService,
        private _profileService: ProfileService,
        private _fb: FormBuilder,
        @Inject('BASE_URL') private _baseUrl: string,
        private _messageService: MessageService
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
            imagePath: [null, FileValidator.validate]
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
            if (this._userInfo.imagePath)
                this.localImage = `${this._baseUrl}/static/${this._userInfo.imagePath}`;

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
        if (this.profileForm.valid && !this.loading) {
            this.loading = true;
            let _joinObservables: Array<Observable<object>> = [];
            _joinObservables.push(this._updateUser(this.profileForm.value))
            if (this._userImage) {
                _joinObservables.push(this._updateUserImage());
            }
            this._changeSubscription = forkJoin(_joinObservables).subscribe(
                () => {
                    this._setMessage('success', 'Server Message', 'Profile Changed Successfully');
                    this.loading = false;
                },
                (error) => {
                    this._setMessage('error', 'Server Message', 'Profile Change Failed');
                    this.serverMessage = error;
                    this.loading = false;
                })
        }
    }

    private _updateUser(changedInfo: User): Observable<ServerResponse<string>> {
        delete changedInfo.imagePath;
        return this._profileService.changeUser(changedInfo);
    }

    private _updateUserImage(): Observable<ServerResponse<string>> {
        return this._profileService.changeUserImage(this._userImage)
    }

    public onClickEdit(): void {
        this._setFormParams();
    }

    public changeFile(event): void {
        if (event) {
            this._userImage = event;
            let reader = new FileReader();
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
        return styles;
    }

    private _setMessage(serverity?, summary?, detail?): void {
        this._messageService.add({ severity: serverity, summary: summary, detail: detail })
    }


    ngOnDestroy() {
        this._getUserSubscription.unsubscribe();
        this._changeSubscription.unsubscribe();
    }
}