import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderParams, ServerResponse, Order, CarouselItem, Good } from '../../../../models/models';
import { OrdersService } from '../orders.service';
import { GoodDetailsModal } from '../../../../modals';
import { MatDialog } from '@angular/material';

declare var google: any;

@Component({
    selector: 'order-view',
    templateUrl: 'order.view.html',
    styleUrls: ['order.view.scss']
})
export class OrderView implements OnInit, OnDestroy {
    public orderInfo: Order;
    public map;
    public loading: boolean = true;
    public mainImage: string;
    public images: Array<string> = [
        '/assets/images/salad.jpg',
        '/assets/images/salad1.jpg',
        '/assets/images/salad.jpg',
    ]

    public goodsCarousel: Array<CarouselItem> = [];

    constructor(private _activatedRoute: ActivatedRoute, private _ordersService: OrdersService, private _matDialog: MatDialog) {
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

    private _getOrder(orderId: number): void {
        this._ordersService.getOrder(orderId).subscribe((data: ServerResponse<Order>) => {
            this.orderInfo = data.message;
            this.loading = false;
            this._setCarouselImages(data.message.goods);
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

    private _setCarouselImages(goods: Array<Good>): void {
        goods.forEach((element: Good) => {
            let carouselItem: CarouselItem = {
                image: element.images,
                name: element.name,
                price: element.price,
                readyTime: element.readyTime
            }
            this.goodsCarousel.push(carouselItem);
        })
    }

    public onClickGood(good: Good): void {
        this._openGoodDetailModal(good);
    }


    private _openGoodDetailModal(good: Good): void {
        let dialogRef = this._matDialog.open(GoodDetailsModal, {
            width: '500px',
            height: '450px',
            data: good
        })
    }


    ngOnDestroy() { }
}