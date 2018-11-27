import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ServerResponse,DashboardInfo } from '../../../models/models';

@Component({
    selector: 'dashboard-view',
    templateUrl: 'dashboard.view.html',
    styleUrls: ['dashboard.view.scss']
})
export class DashboardView implements OnInit, OnDestroy {
    public loading:boolean = false;
    public dashboardInfo:DashboardInfo = new DashboardInfo();

    constructor(private _dashboardService:DashboardService) { }

    ngOnInit() { 
        this._getDashboardInformation();
    }

    private _getDashboardInformation():void{
        this.loading = true;
        this._dashboardService.getDashboardInfo().subscribe((data:ServerResponse<DashboardInfo>)=>{
            this.dashboardInfo = data.message;
            this.loading = false;
            
        })
    }

    ngOnDestroy() { }
    
}