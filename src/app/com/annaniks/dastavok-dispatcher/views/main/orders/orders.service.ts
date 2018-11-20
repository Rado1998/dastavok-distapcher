import { Injectable } from '@angular/core';
import { ApiService } from '../../../services';
import { Observable } from 'rxjs';
import { ServerResponse, Paginator, Order } from '../../../models/models';

@Injectable()
export class OrdersService {

    constructor(private _apiService: ApiService) { }

    public getOrders(status: string, page: number, limit: number): Observable<ServerResponse<Paginator<Array<Order>>>> {
        return this._apiService.get(`/order/status/${status}/${page}/${limit}`)
    }

    public getOrder(orderId: number): Observable<ServerResponse<Order>> {
        return this._apiService.get(`/order/good/${orderId}`)
    }

    public deleteOrder(orderId: number): Observable<ServerResponse<any>> {
        return this._apiService.delete(`/order/${orderId}`);
    }

    public changeOrderStatus(status: string, orderId: number, body = {}): Observable<ServerResponse<string>> {
        return this._apiService.put(`/order/status/${status}/${orderId}`, body);
    }
}