interface Lista {
  id: number;
  archivo: string;
  aduana: number;
  fechaRecibido: string;
  fechaProcesado: null | string;
  fechaRespuesta: null | string;
  status: number;
  resultado: null | string;
  tipoArchivo: number;
  idContacto: number;
  idCliente: number;
  idPrevalidador: number;
  aduanaNombre: string;
  patenteIdPatenteAnterior: null | string;
  patenteIdRepresentanteLegal: null | string;
  patenteAsociado: null | string;
  patenteTipo: null | string;
  clienteId: number;
  clienteRazonSocial: string;
  clientRfc: string;
  contactoId: null | string;
  nombreContacto: null | string;
  apellidoContacto: null | string;
}
export interface IListaArchivos {
  resultado: Array<Lista>;
}
