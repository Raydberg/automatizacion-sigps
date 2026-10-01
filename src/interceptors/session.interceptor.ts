import { SIGPS_URL } from "../constants/SIGPS_API"

export interface SigpsAuth {
    accessToken: string
    refreshToken?: string
}

export const createSigpsSession = (auth: SigpsAuth) => {

    return async function sigpsFetch(
        endpoint: string,
        init: RequestInit = {}
    ) {
        const cookie = [
            `accessToken=${auth.accessToken}`,
            auth.refreshToken ? `refreshToken=${auth.refreshToken}` : null
        ]
            .filter(Boolean)
            .join("; ")

        const response = await fetch(`${SIGPS_URL}${endpoint}`, {
            ...init,
            headers: {
                Accept: "application/json",
                Cookie: cookie,
                ...init.headers,
            }
        })
        return response;

    }
}