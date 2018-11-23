import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './orders.service';
import { OrderParams, ServerResponse, Paginator, Order } from '../../../models/models';

@Component({
    selector: 'orders-view',
    templateUrl: 'orders.view.html',
    styleUrls: ['orders.view.scss']
})
export class OrdersView implements OnInit, OnDestroy {
    private _orderStatus: string;
    public loading:boolean = false;
    public orders: Array<Order> = [];
    public ordersCount: number = 0;
    public pageLength: number = 10;
    constructor(private _activatedRoute: ActivatedRoute, private _ordersService: OrdersService) {
        this._checkOrderStatus();
    }

    ngOnInit() { }

    private _checkOrderStatus(): void {
        this._activatedRoute.params.subscribe((params: OrderParams) => {
            this._resetProperties();
            this._orderStatus = params.orderStatus;
            this._getOrders(params.orderStatus, 1, this.pageLength);
        })
    }

    private _getOrders(status: string, page: number, limit: number): void {
        this.loading = true;
        this._ordersService.getOrders(status, page, limit).subscribe((response: ServerResponse<Paginator<Array<Order>>>) => {
            this.ordersCount = response.message.count;
            this.orders = response.message.result;
            this.loading = false;
        })
    }

    public paginate($event): void {
        this._getOrders(this._orderStatus, $event.pageNumber, this.pageLength);
    }

    private _resetProperties(): void {
        this._orderStatus = undefined;
        this.orders = [];
        this.ordersCount = 0;
        this.pageLength = 10;
    }

    ngOnDestroy() { }
}