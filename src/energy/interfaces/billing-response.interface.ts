export interface EnerguateResponse {
    nombreEmpresa: string;
    direccionEmpresa: string;
    paginaEmpresa: string;
    titularServicio: string;
    fechaEmision: string;
    numeroFactura: string;
    montoTotal: number;
    conceptoPrincipal: string;
    fechaProximaLectura: string;
}

export interface EnerguateResponseResult {
  success: boolean;
  message?: string;
  data?: EnerguateResponse;
}