import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'app-orders-list',
    templateUrl: 'orders-list.component.html',
    styleUrls: ['orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {
    @Input('paginator') public paginatorVisiblity: boolean = false;
    @Input('count') public count: number;
    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}