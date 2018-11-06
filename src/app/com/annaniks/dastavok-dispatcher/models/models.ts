export interface RequestParams {
    headers?
    observe?
    responseType?
}

export interface ServerResponse<T> {
    message: T;
}

export interface LoginResponse {
    token: string,
    refreshToken: string
}

export class User {
    email: string;
    firstName: string;
    imagePath: string;
    lastName: string;
    phoneNumber: string;

    constructor() {
        this.email = '';
        this.firstName = '';
        this.imagePath = '';
        this.lastName = '';
        this.phoneNumber = '';
    }
}

export interface MenuItem {
    label: string,
    routerLink: string
}

export interface Order {

}

export interface OrderParams {
    orderStatus: string
}

export interface Paginator<T> {
    count: number;
    pages: number;
    result: T
}

export interface Order {
    address: string;
    clientId: number;
    companyId: number;
    createdAt: string;
    dispatcherId: string;
    driverId: number;
    driverToClientDate: string;
    driverToRestaurantDate: string;
    id: number;
    name: string;
    orderCompleteDate: string;
    orderStartDate: string;
    status: string;
    totalAmount: number;
    updatedAt: string;
}