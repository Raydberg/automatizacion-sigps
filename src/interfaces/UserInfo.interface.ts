export interface UserInfoResponse {
  code: number;
  message: string | null;
  data: SigpsUser;
}

export interface SigpsUser {
  idUsuario: number;
  idUnidOperativa: number;
  categoria: string;
  nombreRol: string;
  nombres: string;
  nombreUnidOperativa: string;
  estado: string;
}