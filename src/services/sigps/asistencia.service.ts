import type { createSigpsSession } from "../../interceptors/session.interceptor";
import type { ClassResponse, GetClass, SigpsClass, Student } from "../../interfaces/classes.interface";
import type { SigpsUser } from "../../interfaces/UserInfo.interface";

export interface ListClassParams {
    pageNum: number,
    pageSize: number
    idUsuario: SigpsUser['idUsuario'],
    idUnidadOperativa: SigpsUser['idUnidOperativa'],
    texto?: string
    fecInicio: string
    fecFin: string
}


export const getListClass = async (
    client: ReturnType<typeof createSigpsSession>,
    params: ListClassParams
): Promise<SigpsClass> => {


    const response = await client(`/atenciones/asistencia-rapida/listar-clases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })

    if (!response.ok) {
        throw new Error(`Error al traer las clases : ${response.status}`)
    }

    const result: ClassResponse = await response.json()
    console.log("Resultado", result.data)
    if (!result.data) throw new Error(result.message ?? 'No se pudo obtener el listado de clases')

    return result.data

}

export const getClassById = async (
    client: ReturnType<typeof createSigpsSession>,
    id: string
): Promise<Student[]> => {

    const response = await client(`/atenciones/asistencia-rapida/listar-asistencia-clase/${id}`)

    if (!response.ok) throw new Error(`Error al obtener datos de la clase : ${response.status}`)

    const result: GetClass = await response.json()
    if (!result.data) {
        throw new Error(
            result.message ?? "No se pudo obtener la lista de participantes de la clase"
        );
    }
    return result.data

}
