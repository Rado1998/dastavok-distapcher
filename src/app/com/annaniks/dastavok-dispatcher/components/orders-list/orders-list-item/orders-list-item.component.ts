import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { BriefOrder } from '../../../models/models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders-list-item',
    templateUrl: 'orders-list-item.component.html',
    styleUrls: ['orders-list-item.component.scss']
})
export class OrdersListItemComponent implements OnInit, OnDestroy {
    @Input('orderInfo') public orderInfo: BriefOrder = {} as BriefOrder;

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _router: Router) { }

    ngOnInit() {
        console.log(this.orderInfo);
    }

    public onClickMore(): void {
        this._navigateToDetails();
    }

    private _navigateToDetails(): void {
        this._router.navigate([`/orders/${this.orderInfo.status}/${this.orderInfo.id}`])
    }

    public setCompanyImage(): object {
        let styles = {
            'background-image': 'url(/assets/images/avatar.png)'
        }
        if (this.orderInfo.company.companyimage) {
            styles["background-image"] = `${this._baseUrl}/static/${this.orderInfo.company.companyimage}`
        }
        return styles;
    }

    ngOnDestroy() { }
}
