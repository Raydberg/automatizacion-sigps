

export interface SigpsAuth {
    guiid: string,
    accessToken: string,
    refreshToken: string
}
export interface LoginResponse {
    code: number;
    message: string;
    data: Data;
}

export interface Data {
    id: string;
    accessToken: string;
    refreshToken: string;
}
