import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../../services';

@Component({
    selector: 'app-slide-nav',
    templateUrl: 'slide-nav.component.html',
    styleUrls: ['slide-nav.component.scss']
})
export class SlideNavComponent implements OnInit {

    constructor(public menuItemsService: MenuItemsService) { }

    ngOnInit() { }
}