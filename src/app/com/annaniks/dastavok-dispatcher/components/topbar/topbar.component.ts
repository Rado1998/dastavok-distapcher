import { Component, OnInit, Input } from '@angular/core';
import { MenuItemsService } from '../../services';
import { User } from '../../models/models';

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})
export class TopbarComponent implements OnInit {
    public moreInfoVisible: boolean = false;
    @Input() public userInfo: User = {} as User;
    constructor(private _menuItemService: MenuItemsService) { }

    ngOnInit() { }

    public onClickMenuButton(): void {
        this._menuItemService.changeMenuOpen();
    }

    public onClickMoreInfo(): void {
        setTimeout(() => {
            this.moreInfoVisible = !this.moreInfoVisible;
        }, 1)

    }

    public onClickedOutside(): void {
        this.moreInfoVisible = false;
    }

    public setUserAvatar(): object {
        let styles = { 'background-image': 'url(/assets/images/avatar.png' };

        if (this.userInfo.imagePath)
            styles = { 'background-image': 'url(' + this.userInfo.imagePath + ')' }

        return styles;
    }
}