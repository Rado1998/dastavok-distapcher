import { NgModule } from '@angular/core';
import { MainView } from './main.view';
import { MainRoutingModule } from './main.routing.module';
import { MenuItemsService } from '../../services/menuItems.service';
import { TopbarComponent, SlideNavComponent } from '../../components';
import { CommonModule } from '@angular/common';
import { MainService } from './main.service';
import { MaterialModule, SharedModule } from '../../shared';


@NgModule({
    declarations: [MainView, TopbarComponent, SlideNavComponent],
    imports: [MainRoutingModule, CommonModule, SharedModule, MaterialModule],
    providers: [MenuItemsService, MainService]
})
export class MainModule { }