export interface RequestParams {
    headers?
    observe?
    responseType?
}

export interface LoginResponse {
    token: string,
    refreshToken: string
}