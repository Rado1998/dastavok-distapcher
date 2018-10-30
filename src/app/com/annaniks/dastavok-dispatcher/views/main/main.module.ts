import { NgModule } from '@angular/core';
import { MainView } from './main.view';
import { MainRoutingModule } from './main.routing.module';
import { MenuItemsService } from '../../services/menuItems.service';
import { TopbarComponent, SlideNavComponent } from '../../components';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [MainView, TopbarComponent, SlideNavComponent],
    imports: [MainRoutingModule, CommonModule],
    providers: [MenuItemsService]
})
export class MainModule { }