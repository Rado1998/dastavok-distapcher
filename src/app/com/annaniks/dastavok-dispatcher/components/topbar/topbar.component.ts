import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../../services';

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})
export class TopbarComponent implements OnInit {
    public moreInfoVisible: boolean = false;
    constructor(private _menuItemService: MenuItemsService) { }

    ngOnInit() { }

    public onClickMenuButton(): void {
        this._menuItemService.changeMenuOpen();
    }

    public onClickMoreInfo(): void {
        this.moreInfoVisible = !this.moreInfoVisible;
    }

    public onClickedOutside(): void {
        this.moreInfoVisible = false;
    }
}