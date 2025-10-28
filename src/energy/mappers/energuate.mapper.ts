import { error } from "console";

export const energuateFieldMap = {
  nombreEmpresa: 'headerBill.NOM_EMPRESA',
  direccionEmpresa: 'headerBill.DIRECCION_EMPRESA',
  paginaEmpresa: 'headerBill.PAGINA_EMPRESA',
  titularServicio: 'dataPersonBill.TITULAR_SERVICIO',
  fechaEmision: 'genericDataBill.FE_EMISION',
  numeroFactura: 'genericDataBill.NUMERO_FACTURA',
  montoTotal: 'detalleFactura1.1.IMP_CONCEPTO',
  conceptoPrincipal: 'detalleFactura1.1.CONCEPTO',
  fechaProximaLectura: 'proximaLectura.VALOR',
};
