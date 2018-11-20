import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from '../../views/main/orders/orders.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'set-driver',
    templateUrl: 'set-driver.modal.html',
    styleUrls: ['set-driver.modal.scss']
})
export class SetDriverModal implements OnInit, OnDestroy {
    private _subscription:Subscription = new Subscription()
    public error:string;
    public driverForm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) private _orderId: number, private dialogRef: MatDialogRef<SetDriverModal>, private _fb: FormBuilder, private _orderService: OrdersService) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.driverForm = this._fb.group({
            driver: [null, Validators.required],
            restaurtantDate: [null, Validators.required],
            clientDate: [null, Validators.required]
        })
    }

    public onClickSave(): void {
        if(this.driverForm.valid){
            this._setDriver();
        }
    }

    private _setDriver(): void {
        this._orderService.changeOrderStatus('start', this._orderId, {
            driverId: this.driverForm.get('driver').value.id,
            driverToRestaurantDate: this.driverForm.get('driverToRestaurantDate').value,
            driverToClientDate: this.driverForm.get('driverToClientDate').value
        })
        .subscribe((data)=>{
            console.log(data);
        })
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}