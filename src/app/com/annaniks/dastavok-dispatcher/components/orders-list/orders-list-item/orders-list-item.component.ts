import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { BriefOrder } from '../../../models/models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders-list-item',
    templateUrl: 'orders-list-item.component.html',
    styleUrls: ['orders-list-item.component.scss']
})
export class OrdersListItemComponent implements OnInit, OnDestroy {
    @Input('orderInfo') public orderInfo: BriefOrder = {} as BriefOrder;
    public localImage:string='/assets/images/avatar.png';
    
    constructor(@Inject('BASE_URL') private _baseUrl: string, private _router: Router) { }

    ngOnInit() { 
        this._setCompanyImage();
    }

    public onClickMore(): void {
        this._navigateToDetails();
    }

    private _navigateToDetails(): void {
        let status = this.orderInfo.status;
        if (status === 'start' || status === 'accepted' || status === 'onway') {
            status = 'inprocess';
        }
        this._router.navigate([`/orders/${status}/${this.orderInfo.id}`])
    }

    private _setCompanyImage(): void {
        if (this.orderInfo.company.companyimage) {
            this.localImage = `${this._baseUrl}/static/${this.orderInfo.company.companyimage}`
        }
    }

    ngOnDestroy() { }
}
