import { NgModule } from '@angular/core';
import { OrderView } from './order.view';
import { OrderRoutingModule } from './order.routing.module';
import { CommonModule } from '@angular/common';
import { ButtonModule, CarouselModule } from 'primeng/primeng';
import { MatDialogModule } from '@angular/material';
import { GoodDetailsModal } from '../../../../modals';
import { SharedModule } from '../../../../shared';

@NgModule({
    declarations: [
        OrderView,
        GoodDetailsModal
    ],
    imports: [
        OrderRoutingModule,
        CommonModule,
        CarouselModule,
        ButtonModule,
        MatDialogModule,
        SharedModule
    ],
    providers: [],
    entryComponents:[
        GoodDetailsModal
    ]
})
export class OrderModule { }