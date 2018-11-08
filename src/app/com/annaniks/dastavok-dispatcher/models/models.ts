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

export interface BriefOrder {
    address: string;
    clientId: number;
    company: Company;
    companyId: number;
    createdAt: string;
    dispatcherId: number;
    driverId: number
    driverToClientDate: string;
    driverToRestaurantDate: string;
    goods: Array<Good>;
    id: number;
    name: string;
    orderCompleteDate: string;
    orderStartDate: string;
    status: string;
    totalAmount: number;
    updatedAt: string;
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

export interface Company {
    address: string;
    code: number;
    companyType: string;
    confirmed: boolean;
    createdAt: string;
    description: string;
    email: string;
    id: number;
    image: string;
    name: string;
    phoneNumber: string;
    updatedAt: string;
    userName: string;
    zipCode: number;
}

export interface Good {
    createdAt: string;
    description: string;
    goodTypeId: number;
    id: number;
    images: string;
    isDeal: boolean;
    name: string;
    price: number;
    readTime: number;
    thumbnail: string;
    unitId: number;
    updatedAt: string;
}