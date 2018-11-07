import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsView } from './statistics.view';

let statisticsRoutes: Routes = [
    { path: '', component: StatisticsView }
]

@NgModule({
    imports: [RouterModule.forChild(statisticsRoutes)],
    exports: [RouterModule]
})
export class StatisticsRoutingModule { }