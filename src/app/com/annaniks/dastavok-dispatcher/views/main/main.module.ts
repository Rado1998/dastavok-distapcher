import { NgModule } from '@angular/core';
import { MainView } from './main.view';
import { MainRoutingModule } from './main.routing.module';
import { MenuItemsService } from '../../services/menuItems.service';
import { TopbarComponent, SlideNavComponent } from '../../components';
import { CommonModule } from '@angular/common';
import { MainService } from './main.service';
import { MaterialModule, SharedModule } from '../../shared';
import { AppService } from '../../services';


@NgModule({
    declarations: [MainView, TopbarComponent, SlideNavComponent],
    imports: [MainRoutingModule, CommonModule, SharedModule, MaterialModule],
    providers: [MenuItemsService, MainService, AppService]
})
export class MainModule { }