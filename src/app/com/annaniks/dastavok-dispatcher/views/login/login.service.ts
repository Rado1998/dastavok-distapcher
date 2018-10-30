import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

    constructor(private _apiService: ApiService) { }

    public userLogin(username: string, password: string): Observable<object> {
        return this._apiService.post('', { username: username, password: password })
    }
}