import { Component, OnInit, OnDestroy } from '@angular/core';

declare var google: any;

@Component({
    selector: 'live-map-view',
    templateUrl: 'live-map.view.html',
    styleUrls: ['live-map.view.scss']
})
export class LiveMapView implements OnInit, OnDestroy {
    public map;

    constructor() { }

    ngOnInit() {
        this._initMap();
    }

    private _initMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }

    ngOnDestroy() { }
}