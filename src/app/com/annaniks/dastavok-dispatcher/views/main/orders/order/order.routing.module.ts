import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderView } from './order.view';

let orderRoutes: Routes = [
    { path: '', component: OrderView }
]

@NgModule({
    imports: [RouterModule.forChild(orderRoutes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }