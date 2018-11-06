import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: 'loading.component.html',
    styleUrls: ['loading.component.scss']
})
export class LoadingComponent implements OnInit {
    @Input('visiblity') public visiblity: boolean = false;

    constructor() { }

    ngOnInit() { }
}