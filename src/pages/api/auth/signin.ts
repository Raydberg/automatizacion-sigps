import type { APIRoute } from "astro";
import { loginSigps } from "../../../services/sigps/auth.service";
import { createSigpsSession } from "../../../interceptors/session.interceptor";
import { getUser } from "../../../services/sigps/user.service";
import type { SigpsContext } from "../../../interfaces/SigpsContext.interface";

export const POST: APIRoute = async ({
    request,
    cookies,
    redirect,
    session
}) => {
    try {
        const formData = await request.formData()

        const dni = formData.get("dni")?.toString()
        const password = formData.get("password")?.toString()

        if (!dni || !password) return new Response("DNI y la contraseña son requeridos", { status: 400 })


        const auth = await loginSigps(dni, password)

        const client = createSigpsSession({
            accessToken: auth.accessToken,
            refreshToken: auth.refreshToken
        })

        const user = await getUser(client, auth.guiid)

        const sigpsContext: SigpsContext = {
            guiid: auth.guiid,
            auth: {
                accessToken: auth.accessToken,
                refreshToken: auth.refreshToken
            },
            user: {
                id: user.idUsuario,
                name: user.nombres,
                roleName: user.nombreRol
            },
            operationalUnit: {
                id: user.idUnidOperativa,
                name: user.nombreUnidOperativa
            }
        }

        session?.set("sigps", sigpsContext)
        return redirect("/")

    } catch (error) {
        console.error(error)

        return new Response(
            error instanceof Error
                ? error.message
                : "Error iniciando sesión",
            { status: 401 }
        );

    }

}