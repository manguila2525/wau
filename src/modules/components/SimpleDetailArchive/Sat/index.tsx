import Box from '@mui/material/Box';
import {convertirStringArray} from './convertirArchivo';
import {useEffect, useState} from 'react';
import ArchivoRespuesta from './ArchivoRespuesta';
import ErroresJustificables from './ErroresJustificables';
import ListaErroresJustificables from './ListaErroresJustificables';

const index = ({err, informacionGlobal, dataPedimentos, erroresJus}) => {
  const [errores, setErrores] = useState(convertirStringArray(err));
  const [erroresJustificables, setErroresJustificables] = useState([]);
  const cambiarErroresJustificables = (errores) => {
    console.log(errores);
    setErroresJustificables(errores);
  };
  return (
    <>
      <Box sx={{margin: '30px 0'}}>
        <ArchivoRespuesta
          erroresJus={erroresJus}
          archivo={errores}
          informacionGlobal={informacionGlobal}
        />
        <ErroresJustificables
          errores={err}
          archivo={errores}
          informacionGlobal={informacionGlobal}
          dataPedimentos={dataPedimentos}
          cambiarErroresJustificables={cambiarErroresJustificables}
        />
        {erroresJustificables.length > 0 && (
          <ListaErroresJustificables
            errores={errores}
            erroresJustificables={erroresJustificables}
          />
        )}
      </Box>
    </>
  );
};

export default index;
