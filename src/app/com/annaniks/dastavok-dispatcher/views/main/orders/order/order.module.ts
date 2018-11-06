import { NgModule } from '@angular/core';
import { OrderView } from './order.view';
import { OrderRoutingModule } from './order.routing.module';

@NgModule({
    declarations: [OrderView],
    imports: [OrderRoutingModule],
    providers: []
})
export class OrderModule { }