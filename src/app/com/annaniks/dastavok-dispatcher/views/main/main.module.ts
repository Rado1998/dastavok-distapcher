import { NgModule } from '@angular/core';
import { MainView } from './main.view';
import { MainRoutingModule } from './main.routing.module';
import { MenuItemsService } from '../../services/menuItems.service';
import { TopbarComponent, SlideNavComponent } from '../../components';
import { CommonModule } from '@angular/common';
import { MainService } from './main.service';
import { MaterialModule, SharedModule } from '../../shared';
import { AppService } from '../../services';
import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';
import { httpParams } from '../../params/httpParams';

const config: SocketIoConfig = { url: httpParams.socketUrl, options: {} };


@NgModule({
    declarations: [
        MainView, 
        TopbarComponent, 
        SlideNavComponent
    ],
    imports: [
        MainRoutingModule, 
        CommonModule, 
        SharedModule, 
        MaterialModule,
        SocketIoModule.forRoot(config)
    ],
    providers: [
        MenuItemsService, 
        MainService, 
        AppService
    ]
})
export class MainModule { }