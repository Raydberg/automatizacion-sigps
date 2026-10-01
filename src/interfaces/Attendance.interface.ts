
export type AttendanceStatus = "ABIERTO" | "FINALIZADO";
export type AttendanceModality = "PRESENCIAL" | "VIRTUAL";

export interface Attendance {
    idAsisRapido: number;
    descripcion: string;
    fechaReg: string;
    fecha: string;
    fechaCierre: string | null;
    modalidad: AttendanceModality;
    idUnidadOperativa: number;
    sesiones: number;
    horaIni: string;
    horaFin: string;
    estado: AttendanceStatus;
}