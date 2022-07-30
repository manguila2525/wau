import {IAduana} from './IAduana';
import {IPatente} from './IPatente';
export interface IInfoListaAP {
  title: string;
  typeComponent: string;
  aduana: Array<IAduana>;
  patente: Array<IPatente>;
  api: string;
}
