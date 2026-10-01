import type { Attendance } from "./Attendance.interface";

export interface ClassResponse {
    code: number;
    message: string;
    data: SigpsClass;
}

export interface SigpsClass {
    total: number;
    list: Attendance[];
    pageNum: number;
    pageSize: number;
    size: number;
    startRow: number;
    endRow: number;
    pages: number;
    prePage: number;
    nextPage: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    navigatePages: number;
    navigatepageNums: number[];
    navigateFirstPage: number;
    navigateLastPage: number;
}



export interface GetClass {
    code:    number;
    message: null;
    data:    Student[];
}

export interface Student {
    idAsisRapidDet:      number;
    idAsegurado:         number;
    nombre:              string;
    // tipoDoc:             string;
    numDoc:              string;
    fechaRegistro:       Date;
}
