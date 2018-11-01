import { NgModule } from '@angular/core';
import { LiveMapRoutingModule } from './live-map.routing.module';
import { LiveMapView } from './live-map.view';

@NgModule({
    declarations: [LiveMapView],
    imports: [LiveMapRoutingModule],
    exports: []
})
export class LiveMapModule { }