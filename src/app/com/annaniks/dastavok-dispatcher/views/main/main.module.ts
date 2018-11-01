import { NgModule } from '@angular/core';
import { MainView } from './main.view';
import { MainRoutingModule } from './main.routing.module';
import { MenuItemsService } from '../../services/menuItems.service';
import { TopbarComponent, SlideNavComponent } from '../../components';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MainService } from './main.service';


@NgModule({
    declarations: [MainView, TopbarComponent, SlideNavComponent],
    imports: [MainRoutingModule, CommonModule, SharedModule],
    providers: [MenuItemsService, MainService]
})
export class MainModule { }