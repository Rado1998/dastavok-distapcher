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

export interface MenuItem {
    label: string,
    routerLink: string
}