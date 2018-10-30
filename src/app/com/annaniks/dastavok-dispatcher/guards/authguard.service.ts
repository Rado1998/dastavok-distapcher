import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _apiService: ApiService) { }

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        return this._apiService.checkToken();
    }
}