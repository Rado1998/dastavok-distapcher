import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-companies-list-item',
    templateUrl: 'companies-list-item.component.html',
    styleUrls: ['companies-list-item.component.scss']
})
export class CompaniesListItemComponent implements OnInit {
    @Input('company') public company;
    public localImage: string = '/assets/images/avatar.png';

    constructor(private _router: Router) { }

    ngOnInit() {

    }

    public onClickMore(): void {
        this._navToDetails();
    }

    private _navToDetails(): void {
        this._router.navigate(["/companies/",this.company.id]);
    }
}