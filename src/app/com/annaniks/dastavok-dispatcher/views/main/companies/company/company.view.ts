import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { Company, ServerResponse } from '../../../../models/models';

declare var google: any;

@Component({
    selector: 'company-view',
    templateUrl: 'company.view.html',
    styleUrls: ['company.view.scss']
})
export class CompanyView implements OnInit, OnDestroy {
    private _companyId: number;
    private _company: Company = new Company();
    public mainImage: string = '/assets/images/avatar.png';
    public error: boolean = false;
    public loading: boolean = false;
    public map;

    constructor(private _companiesService: CompaniesService, private _activatedRoute: ActivatedRoute) {
        this._checkCompanyId();
    }

    ngOnInit() {
        this._initMap();
    }

    private _checkCompanyId(): void {
        this._activatedRoute.params.subscribe((data) => {
            this._companyId = +data.companyId;
            this._getCompany(this._companyId);
        })
    }

    private _getCompany(companyId: number): void {
        this.loading = true;
        this._companiesService.getCompany(companyId).subscribe(
            (data: ServerResponse<Company>) => {
                this._company = data.message;
                this._addMarker({ lat: data.message.address.lat, lng: data.message.address.lng });
                this.map.setCenter({ lat: data.message.address.lat, lng: data.message.address.lng });
                this._checkCompanySeen(data.message.isSeen);
                this.loading = false;
            },
            (error) => {
                this.loading = false;
                this.error = true;
            })
    }

    private _initMap(): void {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.2222035, lng: 45.239139 },
            zoom: 8
        });
    }

    private _addMarker(coordinates): void {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: this.map
        });
    }

    private _changeCompanyVisiblity(visiblity: boolean,seen:boolean=true): void {
        this._companiesService.changeCompanyVisiblity(seen, visiblity).subscribe((data) => {
            console.log(data); 
            this.company.visibility = visiblity;
        })
    }

    private _checkCompanySeen(seen:boolean):void{
        if(!seen){
            this._changeCompanyVisiblity(this.company.visibility,true);
        }
    }

    public onChange(event): void {
       this._changeCompanyVisiblity(event);
    }

    get company(): Company {
        return this._company;
    }

    ngOnDestroy() { }
}