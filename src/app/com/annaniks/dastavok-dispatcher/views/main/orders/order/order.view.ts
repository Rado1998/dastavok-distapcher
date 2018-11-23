import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderParams, ServerResponse, Order, CarouselItem, Good, DelieveDetailsData, Driver } from '../../../../models/models';
import { OrdersService } from '../orders.service';
import { GoodDetailsModal, DelieveDetailsModal } from '../../../../modals';
import { MatDialog } from '@angular/material';
import { AppService } from '../../../../services';
import { Subscription, forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    public drivers: Array<Driver> = [];
    public mainImage: string;
    public error: string;
    public statusError: boolean = false;
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


    private _initMap(): void {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.2222035, lng:45.239139 },
            zoom: 8
        });

        // google.maps.event.addListener(this.map, 'click', (event) => {
        //     this._addMarker(event.latLng);
        // });

    }

    private _addMarker(coordinates): void {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: this.map
        });
    }

    private _checkOrderId(): void {
        this._activatedRoute.params.subscribe((params: OrderParams) => {
            this._orderStatus = params.orderStatus;
            const combined = forkJoin(
                this._getOrder(params.orderId),
                this._getDrivers()
            )
            this._orderSubscirption = combined.subscribe(()=>{
                this.loading = false;
            })
        })
    }

    private _getOrder(orderId: number): Observable<void> {
        return this._ordersService.getOrder(orderId).pipe(
            map(((data: ServerResponse<Order>) => {
                let status = data.message.status;
                if (status === this._orderStatus || ((status === 'start' || status === 'onway' || status === 'accepted') && this._orderStatus === 'inprocess')) {
                    this.orderInfo = data.message;
                    this.loading = false;
                    this._setCarouselImages(data.message.goods);
                }
                else {
                    this.statusError = true;
                }
            })))
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


    public onClickImage(imageUrl: string): void {
        this._setMainImage(imageUrl);
    }

    private _setMainImage(image: string): void {
        this.mainImage = image;
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

    private _openConfirmModal(callBack, ...args: any[]): void {
        this._appService.openConfirmModal().subscribe((data: boolean) => {
            if (data) {
                callBack(args);
            }
        })
    }

    private _takeOrder = (orderId: number): void => {
        this.loading = true;
        this._ordersService.changeOrderStatus('seen', orderId).subscribe((data) => {
            this.loading = false;
            this._router.navigate([`/orders/seen/${orderId}`]);
        })
    }

    public onClickSetDriver(): void {
        let data: DelieveDetailsData = {
            orderId: this.orderInfo.id,
            change: false
        }
        this._openSetDriverModal(data);
    }

    private _openSetDriverModal(delieveData: DelieveDetailsData): void {
        let dialogRef = this._matDialog.open(DelieveDetailsModal, {
            width: '450px',
            height: '350px',
            data: delieveData
        })
        dialogRef.afterClosed().subscribe((data) => {
            if (data && data.changed) {
                if (!delieveData.change) {
                    this._router.navigate([`/orders/inprocess/${this.orderInfo.id}`]);
                }
                else {
                    this.orderInfo.driverId = data.driverId;
                    this.orderInfo.driverToClientDate = data.driverToClientDate;
                    this.orderInfo.driverToRestaurantDate = data.driverToRestaurantDate;
                }
            }
        })
    }

    public onClickChange(): void {
        let data: DelieveDetailsData = {
            change: true,
            orderId: this.orderInfo.id,
            driverId: this.orderInfo.driverId,
            driverToRestaurantDate: this.orderInfo.driverToRestaurantDate,
            driverToClientDate: this.orderInfo.driverToClientDate,
        }
        this._openSetDriverModal(data);
    }

    private _getDrivers(): Observable<void> {
        return this._ordersService.getDrivers().pipe(
            map((data: ServerResponse<Array<Driver>>) => {
                this.drivers = data.message;
                this.drivers.forEach((element:Driver,index:number)=>{
                    this._addMarker(element.coordinate);
                })
            })
        )
    }

    ngOnDestroy() {
        this._orderSubscirption.unsubscribe();
        this._deleteSubscription.unsubscribe();
    }
}