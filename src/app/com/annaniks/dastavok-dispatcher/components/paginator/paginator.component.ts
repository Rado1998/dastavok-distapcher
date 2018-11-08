import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'app-paginator',
    templateUrl: 'paginator.component.html',
    styleUrls: ['paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnDestroy {
    @Input('count') private _itemsCount: number;
    private _pageLength: number = 10;
    public pages: Array<number> = [];
    constructor() { }

    ngOnInit() {
        this._setPagesCount();
    }

    private _setPagesCount(): void {
        let pageCount: number = Math.floor(this._itemsCount / this._pageLength);
        if (this._itemsCount % this._pageLength > 0) {
            pageCount += 1;
        }
        for (let i = 0; i < pageCount; i++) {
            this.pages.push(i + 1);
        }
    }

    ngOnDestroy() { }
}