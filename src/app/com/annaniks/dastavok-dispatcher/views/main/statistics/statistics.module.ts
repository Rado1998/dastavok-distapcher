import { NgModule } from '@angular/core';
import { StatisticsRoutingModule } from './statistics.routing.module';
import { StatisticsView } from './statistics.view';

@NgModule({
    declarations: [StatisticsView],
    imports: [StatisticsRoutingModule],
    providers: []
})
export class StatisticsModule { }