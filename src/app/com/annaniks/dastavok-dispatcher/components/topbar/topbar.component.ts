import { Component, OnInit, Input, Inject } from '@angular/core';
import { MenuItemsService } from '../../services';
import { User } from '../../models/models';
import { CookieService } from 'angular2-cookie';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})
export class TopbarComponent implements OnInit {
    public moreInfoVisible: boolean = false;
    @Input() public userInfo: User = new User();
    constructor(
        private _menuItemsService: MenuItemsService,
        @Inject('BASE_URL') private _baseUrl: string,
        private _cookieService: CookieService,
        private _router: Router
    ) { }

    ngOnInit() { }

    public onClickMenuButton(): void {
        this._menuItemsService.changeMenuOpen();
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
            styles = { 'background-image': `url(${this._baseUrl}/static/${this.userInfo.imagePath})` }

        return styles;
    }

    public onClickLogOut(): void {
        this._removeCookies();
        this._router.navigate(['/login']);
    }

    private _removeCookies(): void {
        this._cookieService.remove('token');
        this._cookieService.remove('refreshToken');
    }
}