import { Injectable } from '@angular/core';
import { ApiService } from '../../../services';
import { Observable } from 'rxjs';
import { ServerResponse, DashboardInfo } from '../../../models/models';

@Injectable()
export class DashboardService {

    constructor(private _apiService:ApiService){}

    public getDashboardInfo():Observable<ServerResponse<DashboardInfo>>{
        return this._apiService.get(`/dashboard`);
    }
}