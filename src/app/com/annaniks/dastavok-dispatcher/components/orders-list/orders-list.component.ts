import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-orders-list',
    templateUrl: 'orders-list.component.html',
    styleUrls: ['orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {
    public loading: boolean = false;
    @Output('paginate') private _paginateEvent: EventEmitter<object> = new EventEmitter<object>();
    @Input('paginator') public paginatorVisiblity: boolean = false;
    @Input('pageLength') public pageLength: number;
    @Input('count') public count: number;
    @Input('data')
    set data($event) {
        this.loading = false;
    }

    constructor() { }

    ngOnInit() { }

    public paginate(event: object): void {
        this.loading = true;
        this._paginateEvent.emit(event);
    }

    ngOnDestroy() { }
}