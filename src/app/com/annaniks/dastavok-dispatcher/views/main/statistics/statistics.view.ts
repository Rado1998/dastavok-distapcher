import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { StatisticsService } from './statistics.service';
import { OrdersCountStatistics, AmountStatistics } from './statistics.models';
import { map } from 'rxjs/operators';
import { ServerResponse } from '../../../models/models';
import { Subscription, forkJoin, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'statistics-view',
    templateUrl: 'statistics.view.html',
    styleUrls: ['statistics.view.scss']
})
export class StatisticsView implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    private _amountStatistics: Array<AmountStatistics> = [];
    private _ordersCountStatistics: Array<OrdersCountStatistics> = [];
    public loading: boolean = false;
    public ordersChartData;
    public amountChartData;
    public rangeDates: Array<string>;
    private _chartTranslates = {}
    constructor(
        private _statisticsService: StatisticsService,
        private _datePipe: DatePipe,
        private _ngZone: NgZone,
        private _translateService: TranslateService
    ) {
        this._translateService.get(['Total amount', 'Total orders']).subscribe((data) => {
            this._chartTranslates = data;
        }),
        this.ordersChartData = {
            labels: [],
            datasets: [
                {
                    label: 'Total orders',
                    data: [],
                    fill: false,
                    borderColor: '#36A2EB'
                }
            ]
        },
        this.amountChartData = {
            labels: [],
            datasets: [
                {
                    label: "Total amount",
                    data: [],
                    fill: false,
                    borderColor: '#4BC0C0'
                }
            ]
        }
    }

    ngOnInit() {
        this._getStatistics(new Date(), 7);
    }

    private _getStatistics(date: Date, lengthCount: number): void {
        this.loading = true;
        let combined = forkJoin(
            this._getAmountStatistics(date, lengthCount),
            this._getOrdersCountStatistics(date, lengthCount)
        )
        this._subscription = combined.subscribe(() => {
            this.loading = false;
        })
    }

    private _getAmountStatistics(date: Date, lengthCount: number): Observable<void> {
        return this._statisticsService.getStatistics(new Date(date), lengthCount, 'amount').pipe(
            map((data: ServerResponse<Array<AmountStatistics>>) => {
                this._amountStatistics = data.message.reverse();
                this._setChartData(this._amountStatistics, 'amount');
            })
        )
    }

    private _getOrdersCountStatistics(date: Date, lengthCount: number): Observable<void> {
        return this._statisticsService.getStatistics(new Date(date), lengthCount, 'count').pipe(
            map((data: ServerResponse<Array<OrdersCountStatistics>>) => {
                this._ordersCountStatistics = data.message.reverse();
                this._setChartData(this._ordersCountStatistics, 'order');
            })
        )
    }

    public onChangeRange(event): void {
        if (event && event[0] && event[1]) {
            let daysCount = this._calcDayesCount(event[0], event[1]);
            this._getStatistics(event[1], daysCount);
        }
    }

    private _calcDayesCount(startDate: Date, endDate: Date): number {
        let start = new Date(this._datePipe.transform(startDate, 'MM/dd/yyyy'));
        let end = new Date(this._datePipe.transform(endDate, 'MM/dd/yyyy'));
        let timeDiff = Math.abs(end.getTime() - start.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays + 1;
    }

    private _setChartData(chartData, type: string): void {
        let changelabels: Array<string> = [];
        let changeValues: Array<number> = [];
        chartData.forEach((element) => {
            changelabels.push(element.date)
            if (type == 'order')
                changeValues.push(element.count);
            if (type == 'amount') {
                changeValues.push(element.sum);
            }
        })
        if (type == 'order') {
            this.ordersChartData = {
                labels: changelabels,
                datasets: [
                    {
                        label: this._chartTranslates['Total orders'],
                        data: changeValues,
                        fill: false,
                        borderColor: '#36A2EB'
                    }
                ]
            }
        }
        if (type == 'amount') {
            this.amountChartData = {
                labels: changelabels,
                datasets: [
                    {
                        label: this._chartTranslates['Total amount'],
                        data: changeValues,
                        fill: false,
                        borderColor: '#4BC0C0'
                    }
                ]
            }
        }
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}