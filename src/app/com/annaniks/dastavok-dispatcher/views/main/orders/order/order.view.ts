import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderParams, ServerResponse, Order } from '../../../../models/models';
import { OrdersService } from '../orders.service';

declare var google: any;

@Component({
    selector: 'order-view',
    templateUrl: 'order.view.html',
    styleUrls: ['order.view.scss']
})
export class OrderView implements OnInit, OnDestroy {
    public orderInfo: any;
    public map;
    public mainImage: string;
    public images: Array<string> = [
        '/assets/images/salad.jpg',
        '/assets/images/salad1.jpg',
        '/assets/images/salad.jpg',

    ]

    constructor(private _activatedRoute: ActivatedRoute, private _ordersService: OrdersService) {
        this._checkOrderId();
    }

    ngOnInit() {
        this._setMainImage(this.images[0]);
        this._initMap();
    }

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

    public onClickImage(imageUrl: string): void {
        this._setMainImage(imageUrl);
    }

    private _setMainImage(image: string): void {
        this.mainImage = image;
    }

    private _initMap(): void {

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });

    }



    ngOnDestroy() { }
}