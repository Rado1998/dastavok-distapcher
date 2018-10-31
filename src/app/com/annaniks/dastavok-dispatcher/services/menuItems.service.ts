import { Injectable } from '@angular/core';
import { MenuItem } from '../models';

const MENUITEMS: Array<MenuItem> = [
    { label: 'Dashboard', routerLink: '/dashboard' },
    { label: 'Statistics', routerLink: '/statistics' },
    { label: 'New Orders', routerLink: '/new-orders' },
    { label: 'Accepted Orders', routerLink: '/accepted-orders' },
    { label: 'Delieved Orders', routerLink: '/delieved-orders' }
]

@Injectable()
export class MenuItemsService {
    private _menuItems: Array<MenuItem> = MENUITEMS;
    private _menuOpen: boolean = false;

    public changeMenuOpen(): void {
        this._menuOpen = !this._menuOpen;
    }

    public getMenuOpen(): boolean {
        return this._menuOpen;
    }

    public getMenuItems(): Array<MenuItem> {
        return this._menuItems;
    }
}