import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Socket } from 'ng6-socket-io';
//import { MainService } from '../main.service';
declare var google: any;

@Component({
    selector: 'live-map-view',
    templateUrl: 'live-map.view.html',
    styleUrls: ['live-map.view.scss']
})
export class LiveMapView implements OnInit, OnDestroy {
    public map;
    
    constructor(@Inject('BASE_URL') private _baseUrl:string,private _socket:Socket) { 
        //this._socket.ioSocket(this._baseUrl);
    }

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
        this._socket.fromEvent('drivers').subscribe((data)=>{
            console.log(data);
        })
    }

    ngOnDestroy() { }
}