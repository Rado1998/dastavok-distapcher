import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderParams, ServerResponse, Order, CarouselItem, Good, Confirm } from '../../../../models/models';
import { OrdersService } from '../orders.service';
import { GoodDetailsModal, SetDriverModal } from '../../../../modals';
import { MatDialog } from '@angular/material';
import { AppService } from '../../../../services';
import { Subscription } from 'rxjs';

declare var google: any;

@Component({
    selector: 'order-view',
    templateUrl: 'order.view.html',
    styleUrls: ['order.view.scss']
})
export class OrderView implements OnInit, OnDestroy {
    private _orderSubscirption: Subscription = new Subscription();
    private _deleteSubscription: Subscription = new Subscription();
    private _orderStatus: string = '';
    public orderInfo: Order = new Order();
    public map;
    public loading: boolean = true;
    public mainImage: string;
    public images: Array<string> = [
        '/assets/images/salad.jpg',
        '/assets/images/salad1.jpg',
        '/assets/images/salad.jpg',
    ]

    public goodsCarousel: Array<CarouselItem> = [];

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _ordersService: OrdersService,
        private _matDialog: MatDialog,
        private _appService: AppService
    ) {
        this._checkOrderId();
    }

    ngOnInit() {
        this._setMainImage(this.images[0]);
        this._initMap();
    }

    private _checkOrderId(): void {
        this._activatedRoute.params.subscribe((params: OrderParams) => {
            this._orderStatus = params.orderStatus;
            this._getOrder(params.orderId);
        })
    }

    private _getOrder(orderId: number): void {
        this._orderSubscirption = this._ordersService.getOrder(orderId).subscribe((data: ServerResponse<Order>) => {
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
        this.goodsCarousel = [];
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
        //this._openGoodDetailModal(good);
    }


    private _openGoodDetailModal(good: Good): void {
        let dialogRef = this._matDialog.open(GoodDetailsModal, {
            width: '500px',
            height: '550px',
            data: good
        })
    }

    public onClickDelete(): void {
        this._openConfirmModal(this._deleteOrder, this.orderInfo.id);
    }

    private _openConfirmModal(callBack, ...args: any[]): void {
        this._appService.openConfirmModal().subscribe((data: boolean) => {
            if (data) {
                callBack(args);
            }
        })
    }

    private _deleteOrder = (orderId: number): void => {
        this.loading = true;
        this._deleteSubscription = this._ordersService.deleteOrder(orderId).subscribe((data) => {
            this.loading = false;
            this._router.navigate([`/orders/${this._orderStatus}`]);
        })
    }

    public onClickTake(): void {
        this._openConfirmModal(this._takeOrder, this.orderInfo.id);
    }

    private _takeOrder = (orderId: number): void => {
        this.loading = true;
        this._ordersService.changeOrderStatus('seen', orderId).subscribe((data) => {
            this.loading = false;
            this._router.navigate([`/orders/seen/${orderId}`]);
        })
    }

    public onClickSetDriver(): void {
        this._openSetDriverModal()
    }

    private _openSetDriverModal(): void {
        let dialogRef = this._matDialog.open(SetDriverModal, {
            width: '450px',
            height: '350px'
        })
        dialogRef.afterClosed().subscribe((data) => {
            console.log(data);
        })
    }


    ngOnDestroy() {
        this._orderSubscirption.unsubscribe();
        this._deleteSubscription.unsubscribe();
    }
}