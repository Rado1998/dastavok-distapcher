import { NgModule } from '@angular/core';
import { OrderView } from './order.view';
import { OrderRoutingModule } from './order.routing.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { GoodDetailsModal, SetDriverModal } from '../../../../modals';
import { SharedModule, MaterialModule } from '../../../../shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        OrderView,
        GoodDetailsModal,
        SetDriverModal
    ],
    imports: [
        OrderRoutingModule,
        CommonModule,
        MatDialogModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    providers: [],
    entryComponents:[
        GoodDetailsModal,
        SetDriverModal
    ]
})
export class OrderModule { }