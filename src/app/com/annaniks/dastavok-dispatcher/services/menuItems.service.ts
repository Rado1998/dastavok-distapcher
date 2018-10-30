import { Injectable } from '@angular/core';

@Injectable()
export class MenuItemsService {
    private _menuOpen: boolean = false;

    public changeMenuOpen(): void {
        this._menuOpen = !this._menuOpen;
    }

    public getMenuOpen(): boolean {
        return this._menuOpen;
    }
}