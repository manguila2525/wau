import ProcesarArchivo from 'modules/prevalidador/ProcesarArchivo';
import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';

export default AppPage(() => (
  <ProcesarArchivo
    api={{
      url: 'https://ozib7lr4z1.execute-api.us-east-1.amazonaws.com/api/api/estadoRevision',
      procesar: 'auditor',
    }}
  />
));
