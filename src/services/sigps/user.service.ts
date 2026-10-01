import type { createSigpsSession } from "../../interceptors/session.interceptor";
import type { SigpsUser, UserInfoResponse } from "../../interfaces/UserInfo.interface";

export const getUser = async (
    client: ReturnType<typeof createSigpsSession>,
    guiid: string
): Promise<SigpsUser> => {

    const response = await client(`/usuario/login/data/${guiid}`)
    if (!response.ok) {
        throw new Error(`Error al obtener al usuario: ${response.status}`)
    }
    const result: UserInfoResponse = await response.json()
    if (!result.data) {
        throw new Error(
            result.message ?? "No se pudo obtener la información del usuario"
        );
    }

    return result.data;

}