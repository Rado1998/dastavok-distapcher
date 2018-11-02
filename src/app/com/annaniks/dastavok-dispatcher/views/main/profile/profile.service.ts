import { Injectable } from '@angular/core';
import { ApiService } from '../../../services';
import { Observable } from 'rxjs';
import { ServerResponse, User } from '../../../models/models';

@Injectable()
export class ProfileService {

    constructor(private _apiService: ApiService) { }

    public changeUser(userInfo: User): Observable<ServerResponse<string>> {
        return this._apiService.put('', userInfo);
    }
}