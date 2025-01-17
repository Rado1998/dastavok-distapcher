import { Injectable } from '@angular/core';
import { ApiService } from '../../../services';
import { Observable } from 'rxjs';
import { ServerResponse } from '../../../models/models';
import { OrdersCountStatistics,AmountStatistics } from './statistics.models';

@Injectable()
export class StatisticsService {

    constructor(private _apiService:ApiService){}

    public getStatistics(date:Date,lengthCount:number,type:string):Observable<ServerResponse<Array<AmountStatistics | OrdersCountStatistics>>>{
        console.log(date,lengthCount);
        return this._apiService.get(`/statistics/${date}/${lengthCount}/${type}`)
    }
}