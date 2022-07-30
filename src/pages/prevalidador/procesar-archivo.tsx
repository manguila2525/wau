import ProcesarArchivo from 'modules/prevalidador/ProcesarArchivo';
import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Page1 = asyncComponent(() => import('../../modules/sample/Page1'));
export default AppPage(() => (
  <ProcesarArchivo
    api={{
      url: 'https://ozib7lr4z1.execute-api.us-east-1.amazonaws.com/api/api/estadoValidacion',
      procesar: 'archivo',
    }}
  />
));
