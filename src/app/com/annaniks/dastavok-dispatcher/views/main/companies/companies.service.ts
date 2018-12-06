import { Injectable } from '@angular/core';
import { ApiService } from '../../../services';
import { Observable } from 'rxjs';
import { ServerResponse, Paginator, Company } from '../../../models/models';

@Injectable()
export class CompaniesService {

    constructor(private _apiSerivce: ApiService) { }

    public getCompanies(page: number, limit: number, isSeen: boolean = null, visiblity: boolean = null, name: string = ''): Observable<ServerResponse<Paginator<Company[]>>> {
        return this._apiSerivce.get(`/company/${page}/${limit}/query?isSeen=${isSeen}&visibility=${visiblity}&name=${name}`);
    }

    public getCompany(companyId: number): Observable<ServerResponse<Company>> {
        return this._apiSerivce.get(`/${companyId}/company`);
    }

    public changeCompanyVisiblity(isSeen: boolean = true, visiblity: boolean = false): Observable<string> {
        return this._apiSerivce.put('/company', {
            isSeen: isSeen,
            visibility: visiblity
        })
    }
}