import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from '../../views/main/orders/orders.service';
import { Subscription } from 'rxjs';
import { ServerResponse, Driver, DelieveDetailsData } from '../../models/models';

@Component({
    selector: 'delieve-details',
    templateUrl: 'delieve-details.modal.html',
    styleUrls: ['delieve-details.modal.scss']
})
export class DelieveDetailsModal implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    public drivers: Array<Driver> = [];
    public error: string;
    public driverForm: FormGroup;
    public loading: boolean = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: DelieveDetailsData,
        private dialogRef: MatDialogRef<DelieveDetailsModal>,
        private _fb: FormBuilder,
        private _orderService: OrdersService,
    ) { }

    ngOnInit() {
        this._formBuilder();
        this._getDrivers();
    }

    private _formBuilder(): void {
        this.driverForm = this._fb.group({
            driver: [null, Validators.required],
            restaurtantDate: [null, Validators.required],
            clientDate: [null, Validators.required]
        })
    }

    private _checkDetails(): void {
        if (this.data.change) {
            this._setDetails();
        }
    }

    private _setDetails(): void {
        let driver = this.drivers.filter((element) => element.id === this.data.driverId)[0];
        this.driverForm.patchValue({
            driver: driver,
            restaurtantDate: new Date(this.data.driverToRestaurantDate),
            clientDate: new Date(this.data.driverToClientDate)
        })
    }

    private _getDrivers(): void {
        this.loading = true;
        this._orderService.getDrivers().subscribe((data: ServerResponse<Array<Driver>>) => {
            this.drivers = data.message;
            this.drivers.forEach((element:Driver,index:number)=>{
                element.fullName=`${element.firstName} ${element.lastName}`;
            })
            this.loading = false;
            this._checkDetails();
        })
    }

    public onClickSave(): void {
        if (this.driverForm.valid) {
            if (!this.data.change) {
                this._setDelieveDetails();
            }
            else {
                this._changeDelieveDetails();
            }
        }

    }

    private _setDelieveDetails(): void {
        this.loading = true;
        this._orderService.changeOrderStatus('start', this.data.orderId, {
            driverId: this.driverForm.get('driver').value.id,
            driverToRestaurantDate: this.driverForm.get('restaurtantDate').value,
            driverToClientDate: this.driverForm.get('clientDate').value
        }).subscribe(
            (data: ServerResponse<string>) => {
                this.loading = false;
                this.dialogRef.close({
                    changed: true
                });
            },
            (error) => {
                this.error = error.error.message;
                this.loading = false;
            })
    }

    private _changeDelieveDetails(): void {
        this.loading = true;
        this._orderService.changeDelieveDatils(this.data.orderId, {
            driverId: this.driverForm.get('driver').value.id,
            driverToRestaurantDate: this.driverForm.get('restaurtantDate').value,
            driverToClientDate: this.driverForm.get('clientDate').value
        }).subscribe(
            (data: ServerResponse<string>) => {
                this.loading = false;
                this.dialogRef.close({
                    changed: true,
                    driverId: this.driverForm.get('driver').value.id,
                    driverToRestaurantDate: this.driverForm.get('restaurtantDate').value,
                    driverToClientDate: this.driverForm.get('clientDate').value
                })
            },
            (error) => {
                this.error = error.error.message;
                this.loading = false;
            })
    }



    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}