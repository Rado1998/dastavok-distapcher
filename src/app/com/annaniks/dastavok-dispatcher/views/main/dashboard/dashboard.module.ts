import { NgModule } from '@angular/core';
import { DashboardView } from './dashboard.view';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule } from '../../../shared';


@NgModule({
    declarations: [DashboardView],
    imports: [DashboardRoutingModule,SharedModule],
    providers: []
})
export class DashboardModule { }