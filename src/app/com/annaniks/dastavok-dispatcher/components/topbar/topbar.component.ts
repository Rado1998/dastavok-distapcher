import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../../services';

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})
export class TopbarComponent implements OnInit {

    constructor(private _menuItemService: MenuItemsService) { }

    ngOnInit() { }

    public onClickMenuButton(): void {
        this._menuItemService.changeMenuOpen();
    }
}