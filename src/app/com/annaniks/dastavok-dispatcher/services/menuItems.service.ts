import { Injectable } from '@angular/core';
import { MenuItem } from '../models/models';

const MENUITEMS: Array<MenuItem> = [
    { label: 'Dashboard', routerLink: '/dashboard' },
    { label: 'Statistics', routerLink: '/statistics' },
    { label: 'Live Map', routerLink: '/live-map' },
    { label: 'New Orders', routerLink: '/orders/new' },
    { label: 'Seen Orders', routerLink: '/orders/seen' },
    { label: 'In Proccess Orders', routerLink: '/orders/inprocess' },
    { label: 'Rejected Orders', routerLink: '/orders/rejected' },
    // { label: 'Complited Orders', routerLink: '/orders/complited' },
    
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