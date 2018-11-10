import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BriefOrder } from '../../../models/models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders-list-item',
    templateUrl: 'orders-list-item.component.html',
    styleUrls: ['orders-list-item.component.scss']
})
export class OrdersListItemComponent implements OnInit, OnDestroy {
    @Input('orderInfo') public orderInfo: BriefOrder = {} as BriefOrder;

    constructor(private _router: Router) { }

    ngOnInit() { }

    public onClickMore(): void {
        this._navigateToDetails();
    }

    private _navigateToDetails(): void {
        this._router.navigate([`/orders/${this.orderInfo.status}/${this.orderInfo.id}`])
    }

    ngOnDestroy() { }
}