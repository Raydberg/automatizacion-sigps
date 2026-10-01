export interface SigpsContext {
    guiid: string;

    auth: {
        accessToken: string;
        refreshToken: string;
    };

    user: {
        id: number;
        name: string;
        roleName: string;
    };

    operationalUnit: {
        id: number;
        name: string;
    };
}