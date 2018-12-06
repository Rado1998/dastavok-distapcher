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
    company: BriefCompany;
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

export class Order {
    address: Address;
    buyDate: string;
    client: Client
    clientId: number;
    comment: string;
    company: BriefCompany
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

    constructor() {
        this.address = {} as Address;
        this.buyDate = '';
        this.client = {} as Client;
        this.clientId = 0;
        this.comment = '';
        this.company = {} as BriefCompany;
        this.companyId = 0;
        this.createdAt = '';
        this.dispatcherId = 0;
        this.driverId = 0;
        this.driverToClientDate = '';
        this.driverToRestaurantDate = '';
        this.goods = [];
        this.id = 0;
        this.name = '';
        this.orderCompleteDate = '';
        this.orderStartDate = '';
        this.reviewId = 0;
        this.status = '';
        this.totalAmount = 0;
        this.updatedAt = '';
    }

}

export interface BriefCompany {
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

export class Company{
    address: Address;
    code: number;
    companyType: string;
    confirmed: boolean;
    createdAt: string;
    description: string;
    email:string;
    id: number;
    image: string;
    isSeen: boolean;
    name: string;
    phoneNumber: string;
    updatedAt: string;
    userName: string;
    visibility: boolean;
    zipCode: number;

    constructor(){
        this.address = {} as Address;
        this.code = 0;
        this.companyType = '';
        this.confirmed = false;
        this.createdAt = '';
        this.description = '';
        this.email = '';
        this.id = 0;
        this.image = '';
        this.isSeen = false;
        this.name = '';
        this.phoneNumber = '';
        this.updatedAt = '';
        this.userName = '';
        this.visibility = false;
        this.zipCode = 0;
    }
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

export interface Confirm {
    confirm: boolean;
}

export interface Driver {
    id: number;
    firstName: string;
    lastName: string;
    fullName?
    coordinate: Coordinate
}

export interface DelieveDetailsData {
    orderId?;
    driverId?;
    driverToRestaurantDate?;
    driverToClientDate?;
    change: boolean;
}

interface Coordinate {
    lat: number;
    lng: number;
}

export class DashboardInfo {
    amount: number;
    driverCount: number;
    newCount: number;
    onWayCount: number;

    constructor(){
        this.amount = 0;
        this.driverCount = 0;
        this.newCount = 0;
        this.onWayCount = 0;
    }
}