import { NgModule } from '@angular/core';
import { StatisticsRoutingModule } from './statistics.routing.module';
import { StatisticsView } from './statistics.view';
import { ChartModule } from 'primeng/chart';
import { StatisticsService } from './statistics.service';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SharedModule } from '../../../shared';


@NgModule({
    declarations: [StatisticsView],
    imports: [StatisticsRoutingModule, ChartModule,CalendarModule,FormsModule,SharedModule],
    providers: [StatisticsService,DatePipe]
})
export class StatisticsModule { }