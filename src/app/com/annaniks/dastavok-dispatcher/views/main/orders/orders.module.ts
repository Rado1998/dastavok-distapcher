import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders.routing.module';
import { OrdersView } from './orders.view';
import { OrdersService } from './orders.service';
import { OrdersListComponent, OrdersListItemComponent } from '../../../components';
import { SharedModule } from '../../../shared';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [OrdersView, OrdersListComponent, OrdersListItemComponent],
    imports: [OrdersRoutingModule, SharedModule,CommonModule],
    providers: [OrdersService],
})
export class OrdersModule { }