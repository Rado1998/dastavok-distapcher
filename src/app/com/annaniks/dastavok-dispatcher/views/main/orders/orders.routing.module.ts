import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersView } from './orders.view';

let ordersRoutes: Routes = [
    { path: '', component: OrdersView },
    { path: ':orderId', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/orders/order/order.module#OrderModule' },
]

@NgModule({
    imports: [RouterModule.forChild(ordersRoutes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }