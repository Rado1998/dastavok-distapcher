import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders.routing.module';
import { OrdersView } from './orders.view';
import { OrdersService } from './orders.service';

@NgModule({
    declarations: [OrdersView],
    imports: [OrdersRoutingModule],
    providers: [OrdersService],
    exports: []
})
export class OrdersModule { }