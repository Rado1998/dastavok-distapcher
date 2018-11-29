import { Injectable } from '@angular/core';
import { ApiService } from '../../services';
import { Observable } from 'rxjs';
import { User, ServerResponse } from '../../models/models';
import { map } from 'rxjs/operators';
import { Socket } from 'ng6-socket-io';

@Injectable()
export class MainService {
    private _userInfo: User;
    constructor(private _apiService: ApiService, private _socket:Socket) { }

    public getUser(): Observable<User> {
        return this._apiService.get('').pipe(
            map((data: ServerResponse<User>) => {
                this._userInfo = data.message;
                return data.message;
            })
        );
    }

    public getUserInfo(): User {
        return this._userInfo;
    }
}