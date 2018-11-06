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
    public orders: Array<Order> = [];
    constructor(private _activatedRoute: ActivatedRoute, private _ordersService: OrdersService) {
        this._checkOrderStatus();
    }

    ngOnInit() { }

    private _checkOrderStatus(): void {
        this._activatedRoute.params.subscribe((params: OrderParams) => {
            this._getOrders(params.orderStatus, 1, 10);
        })
    }

    private _getOrders(status: string, page: number, limit: number): void {
        this._ordersService.getOrders(status, page, limit).subscribe((response: ServerResponse<Paginator<Array<Order>>>) => {
            this.orders = response.message.result;
            console.log(this.orders);
        })
    }

    ngOnDestroy() { }
}