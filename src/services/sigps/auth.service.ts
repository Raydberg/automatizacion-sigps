import { SIGPS_URL } from '../../constants/SIGPS_API';
import type { LoginResponse, SigpsAuth } from '../../interfaces/LoginResponse';
export const loginSigps = async (
    username: string,
    password: string
): Promise<SigpsAuth> => {

    const response = await fetch(`${SIGPS_URL}/sso/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });

    if (!response.ok) {
        throw new Error(`Error al iniciar sesion mediante sistema ESSALUD : ${response.status}`)
    }

    const result: LoginResponse = await response.json()

    if (result.code !== 0 || !result.data) {
        throw new Error(result.message ?? "No se pudo iniciar sesión en SIGPS");
    }

    return {
        guiid: result.data.id,
        accessToken: result.data.accessToken,
        refreshToken: result.data.refreshToken,
    };

}