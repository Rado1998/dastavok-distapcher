import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderParams, ServerResponse, Order } from '../../../../models/models';
import { OrdersService } from '../orders.service';

@Component({
    selector: 'order-view',
    templateUrl: 'order.view.html',
    styleUrls: ['order.view.scss']
})
export class OrderView implements OnInit, OnDestroy {
    public orderInfo: Order = {} as Order;

    constructor(private _activatedRoute: ActivatedRoute, private _ordersService: OrdersService) {
        this._checkOrderId();
    }

    ngOnInit() { }

    private _checkOrderId(): void {
        this._activatedRoute.params.subscribe((params: OrderParams) => {
            this._getOrder(params.orderId);
        })
    }

    private _getOrder(orderId: number) {
        this._ordersService.getOrder(orderId).subscribe((data: ServerResponse<Order>) => {
            this.orderInfo = data.message;
            console.log(data.message);
        })
    }


    ngOnDestroy() { }
}