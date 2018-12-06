import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompaniesService } from './companies.service';

@Component({
    selector: 'companies-view',
    templateUrl: 'companies.view.html',
    styleUrls: ['companies.view.scss']
})
export class CompaniesView implements OnInit, OnDestroy {
    public loading:boolean = false;
    public companies: Array<any> = [];
    public count: number;
    private _page: number = 1;
    private _pageLength: number = 10;

    constructor(private _companiesService: CompaniesService) { }

    ngOnInit() {
        this.getCompanies();
    }

    public getCompanies(): void {
        this.loading = true;
        this._companiesService.getCompanies(this._page, this._pageLength).subscribe((data) => {
            this.companies = data.message.result;
            this.count = data.message.count;
            this.loading = false;
        })
    }

    public paginate(event): void {
        this._page = event.pageNumber;
        this.getCompanies();
    }

    get page():number{
        return this._page;
    }

    get pageLength():number{
        return this._pageLength;
    }

    ngOnDestroy() { }

}