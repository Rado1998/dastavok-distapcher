import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector:'app-card',
    templateUrl:'card.component.html',
    styleUrls:['card.component.scss']
})
export class CardComponent implements OnInit {
    @Input('cardHeader') public cardHeader:string = 'Header';
    @Input('cardTitle') public cardTitle:string = 'Primary card title'; 
    @Input('cardText') public cardText:string = 'Some quick example text to build on the card title and make up the bulk of the cards content.';
    @Input('background') public background:string='#007bff';

    constructor(){}

    ngOnInit(){}

}