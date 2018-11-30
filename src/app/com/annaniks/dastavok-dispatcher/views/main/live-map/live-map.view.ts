import { Component, OnInit, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';

declare var google: any;

@Component({
    selector: 'live-map-view',
    templateUrl: 'live-map.view.html',
    styleUrls: ['live-map.view.scss']
})
export class LiveMapView implements OnInit, OnDestroy {
    public map;
    
    constructor(private _socket:Socket) {}

    ngOnInit() {
        this._initMap();
        //this._connectSocket();
        this._getLiveDrivers();
    }

    private _initMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.2222035, lng: 45.239139 },
            zoom: 8
        });
    }

    private _getLiveDrivers():void{
        this._socket.on('drivers',(data)=>{
            console.log(data);
        })    
    }

    ngOnDestroy() { }
}