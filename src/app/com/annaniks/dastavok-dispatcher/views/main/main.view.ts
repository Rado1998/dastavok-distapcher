import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItemsService } from '../../services/menuItems.service';
import { MainService } from './main.service';
import { User } from '../../models/models';

@Component({
    selector: 'main-view',
    templateUrl: 'main.view.html',
    styleUrls: ['main.view.scss']
})
export class MainView implements OnInit, OnDestroy {
    public userInfo: User = new User();
    constructor(public menuItemsService: MenuItemsService, private _mainService: MainService) { }

    ngOnInit() {
        this._getUser();
    }

    private _getUser(): void {
        this._mainService.getUser().subscribe((data: User) => {
            this.userInfo = data;
        })
    }

    ngOnDestroy() { }
}