import type { Attendance } from "./Attendance.interface";

export interface AttendanceListResponse {
    code: number;
    message: string | null;

    data: {
        total: number;
        list: Attendance[];

        pageNum: number;
        pageSize: number;
        size: number;
        pages: number;

        isFirstPage: boolean;
        isLastPage: boolean;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    };
}



