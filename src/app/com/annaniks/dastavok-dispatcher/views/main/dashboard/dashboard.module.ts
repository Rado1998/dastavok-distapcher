import { NgModule } from '@angular/core';
import { DashboardView } from './dashboard.view';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
    declarations: [DashboardView],
    imports: [DashboardRoutingModule],
    providers: []
})
export class DashboardModule { }