import { NgModule } from '@angular/core';
import { MainView } from './main.view';
import { MainRoutingModule } from './main.routing.module';

@NgModule({
    declarations: [MainView],
    imports: [MainRoutingModule],
    providers: []
})
export class MainModule { }