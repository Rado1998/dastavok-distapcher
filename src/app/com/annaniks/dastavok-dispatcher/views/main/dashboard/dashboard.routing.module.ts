import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardView } from './dashboard.view';

let dashboardRoutes: Routes = [
    { path: '', component: DashboardView }
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }