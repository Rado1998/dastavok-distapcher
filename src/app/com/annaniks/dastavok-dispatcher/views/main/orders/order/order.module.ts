import { NgModule } from '@angular/core';
import { OrderView } from './order.view';
import { OrderRoutingModule } from './order.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [OrderView],
    imports: [OrderRoutingModule, CommonModule],
    providers: []
})
export class OrderModule { }