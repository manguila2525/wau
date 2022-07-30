import {BiAlignLeft} from 'react-icons/bi';
import {ReactNode} from 'react';
import {RoutePermittedRole} from '../shared/constants/AppConst';

export interface RouterConfigData {
  id: string;
  title: string;
  messageId: string;
  icon?: string | ReactNode;
  type: 'item' | 'group' | 'collapse' | 'divider';
  children?: RouterConfigData[];
  permittedRole?: RoutePermittedRole;
  color?: string;
  url?: string;
  exact?: boolean;
  count?: number;
  as?: string;
}

const routesConfig: RouterConfigData[] = [
  {
    id: 'app',
    title: 'Prevalidador',
    messageId: 'menu.prevalidador',
    type: 'group',
    children: [
      {
        id: 'visorArchivos',
        title: 'Visor de archivos',
        messageId: 'menu.prevalidador.visorArchivos',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/prevalidador/visor-archivos',
      },
      {
        id: 'page-2',
        title: 'Procesar archivos',
        messageId: 'menu.prevalidador.procesarArchivos',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/prevalidador/procesar-archivo',
      },
      {
        id: 'page-3',
        title: 'Visor de pedimentos',
        messageId: 'menu.prevalidador.visorPedimentos',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/prevalidador/visor-pedimentos',
      },
      {
        id: 'page-4',
        title: 'Auditor de archivos',
        messageId: 'Auditor de archivos',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/prevalidador/auditor-archivos',
      },
      {
        id: 'page-5',
        title: 'Procesar archivos de Auditor',
        messageId: 'Procesar archivos de Auditor',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/prevalidador/procesar-archivo-auditor',
      },
    ],
  },
];
export default routesConfig;
