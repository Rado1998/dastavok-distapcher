import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemsService } from '../../services/menuItems.service';

@Component({
    selector: 'main-view',
    templateUrl: 'main.view.html',
    styleUrls: ['main.view.scss']
})
export class MainView implements OnInit, OnDestroy {

    constructor(public menuItemsService: MenuItemsService) { }

    ngOnInit() { }

    ngOnDestroy() { }
}