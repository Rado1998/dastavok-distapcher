import { Injectable } from '@angular/core';
import { ApiService } from '../../../services';
import { Observable, of } from 'rxjs';
import { ServerResponse, User } from '../../../models/models';

@Injectable()
export class ProfileService {

    constructor(private _apiService: ApiService) { }

    public changeUser(userInfo: User): Observable<ServerResponse<string>> {
        return this._apiService.put('', userInfo);
    }

    public changeUserImage(image): Observable<ServerResponse<string>> {
        let fileList: FileList = image.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData = new FormData();
            formData.append('file', file, file.name);
            return this._apiService.postFormData('/image', formData);
        }
        else {
            return of({ message: "canceled" });
        }

    }
}