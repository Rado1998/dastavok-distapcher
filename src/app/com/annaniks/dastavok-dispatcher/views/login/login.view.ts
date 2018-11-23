import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './login.service';
import { LoginResponse, ServerResponse } from '../../models/models';
import { CookieService } from 'angular2-cookie';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'login-view',
    templateUrl: 'login.view.html',
    styleUrls: ['login.view.scss']
})
export class LoginView implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    public loginForm: FormGroup;

    constructor(
        private _loginService: LoginService,
        private _cookieService: CookieService,
        private _fb: FormBuilder,
        private _router: Router) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.loginForm = this._fb.group({
            username: ['dispatcher@gmail.com', Validators.required],
            password: ['dispatcher', Validators.required]
        })
    }

    public onClickLogin(): void {
        if (this.loginForm.valid) {
            this._subscription = this._loginService.userLogin(
                this.loginForm.get('username').value,
                this.loginForm.get('password').value)
                .subscribe((response: ServerResponse<LoginResponse>) => {
                    this._setCookie(response.message.token, response.message.refreshToken);
                    this._router.navigate(['/dashboard'])
                })
        }
    }

    private _setCookie(token: string, refreshToken: string): void {
        this._cookieService.put('token', token);
        this._cookieService.put('refreshToken', refreshToken);
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

}