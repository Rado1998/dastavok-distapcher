import { NgModule } from '@angular/core';
import { DashboardView } from './dashboard.view';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule } from '../../../shared';
import { DashboardService } from './dashboard.service';


@NgModule({
    declarations: [DashboardView],
    imports: [DashboardRoutingModule,SharedModule],
    providers: [DashboardService]
})
export class DashboardModule { }