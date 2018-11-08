import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BriefOrder } from '../../../models/models';

@Component({
    selector: 'app-orders-list-item',
    templateUrl: 'orders-list-item.component.html',
    styleUrls: ['orders-list-item.component.scss']
})
export class OrdersListItemComponent implements OnInit, OnDestroy {
    @Input('orderInfo') public orderInfo: BriefOrder = {} as BriefOrder;

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}