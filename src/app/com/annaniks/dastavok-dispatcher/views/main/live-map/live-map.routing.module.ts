import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveMapView } from './live-map.view';

let liveMapRoutes: Routes = [
    { path: '', component: LiveMapView }
]

@NgModule({
    imports: [RouterModule.forChild(liveMapRoutes)],
    exports: [RouterModule]
})
export class LiveMapRoutingModule { }