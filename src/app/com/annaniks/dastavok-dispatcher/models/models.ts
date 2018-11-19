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
    orderStatus: string,
    orderId?
}

export interface Paginator<T> {
    count: number;
    pages: number;
    result: T
}

export interface Order {
    address: Address;
    buyDate: string;
    client: Client
    clientId: number;
    comment: string;
    company: Company
    companyId: number;
    createdAt: string;
    dispatcherId: number;
    driverId: number;
    driverToClientDate: string;
    driverToRestaurantDate: string;
    goods: Array<Good>
    id: number;
    name: string;
    orderCompleteDate: string;
    orderStartDate: string;
    reviewId: number;
    status: string;
    totalAmount: number;
    updatedAt: string;

}

export interface Company {
    companyaddress: Address;
    companydescription: string;
    companyemail: string;
    companyid: number;
    companyimage: string;
    companyname: string;
    companyphonenumber: string;
    companytype: string;
    companyusername: string;
    companyzipcode: number
}

export interface Good {
    companyId: number;
    createdAt: string;
    description: string;
    goodTypeId: number;
    goodtypename: string;
    id: number;
    images: string;
    isDeal: boolean;
    name: string;
    price: number;
    readyTime: number;
    thumbnail: string;
    unitId: number;
    unitsname: string;
    unitssympol: string;
    updatedAt: string;
}

export interface CarouselItem {
    image: string;
    name: string;
    price: number;
    readyTime: number;
}

interface Address {
    lat: number,
    lng: number,
    text: string;
}

interface Client {
    address: Array<Address>;
    balance: number;
    fullName: string;
    id: number;
    phoneNumber: string;
    userName: string;
}