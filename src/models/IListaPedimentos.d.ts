export interface IListaPedimentos {
  id: string;
  status: string;
  aduana: string;
  tipoOperacion: string;
  claveDocumento: null | string;
  impuestoEfectivo: null | string;
  impuestoNoEfectivo: string;
  idPrevalidador: null | string;
  fechaEntPre: string;
  fechaPago: string;
  pedimento: string;
}
// export interface IListaPedimentos {
//   resultado: Array<Lista>;
// }
