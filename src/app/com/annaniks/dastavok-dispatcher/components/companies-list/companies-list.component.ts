import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-companies-list',
    templateUrl: 'companies-list.component.html',
    styleUrls: ['companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
    public loading:boolean =  true;
    @Output('paginate') private _paginateEvent: EventEmitter<object> = new EventEmitter<object>();
    @Input('paginator') public paginatorVisiblity: boolean = false;
    @Input('pageLength') public pageLength: number;
    @Input('count') public count: number;
    @Input('data')
    set data($event) {
        this.loading = false;
    }
    
    constructor() { }

    ngOnInit() {}
    
    public paginate(event):void{
        this._paginateEvent.emit(event);
    }
    
    
}