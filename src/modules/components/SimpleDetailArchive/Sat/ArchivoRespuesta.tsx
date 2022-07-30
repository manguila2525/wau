import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import ModalDetail from './ModalDetail';
import axios from 'axios';

interface DetalleError {
  registro: string;
  linea: string;
  campo: string;
  tipo: string;
  consecutivo: string;
  respuesta: string;
}
interface DetalleArchivo {
  pediment: string;
  error: string;
  detail: DetalleError;
}
interface InformacionGlobal {
  nombre: string;
}
interface Archivo {
  archivo: Array<string> | Array<DetalleArchivo>;
  informacionGlobal: InformacionGlobal;
  erroresJus: Array<{}>;
}

const ArchivoRespuesta = (props: Archivo) => {
  let {archivo, informacionGlobal, erroresJus} = props;
  const [detalle, setDetalle] = useState({
    linea: '',
    respuesta: '',
    tipo: '',
    detalle: {
      tipoRegistro: '',
      campo: '',
      consecutivo: '',
      descripcionSiara: '',
    },
  });
  console.log(informacionGlobal);
  const [openModal, setOpenModal] = useState(false);
  console.log(archivo);
  // const erroresDetalle = async () => {
  //   const {data} = await axios.get(
  //     `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/errorM3/${errorJustificable}`,
  //   );
  //   // erroresArray.push(data);
  //   console.log(data);
  //   setErroresJus((oldArray) => [...oldArray, data]);
  //   console.log(erroresJus);
  // };
  const modalErrores = async (detalle, errorJustificable) => {
    const errorConcat = detalle.pedimento + detalle.error;
    const {data} = await axios.get(
      `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/errorM3/${errorConcat}`,
    );
    console.log(detalle.pedimento + detalle.error);
    console.log(errorJustificable);
    setDetalle(data);
    setOpenModal(true);
  };
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <Typography
        variant='h4'
        align='center'
        sx={{margin: '20px 0'}}
        color='primary'
        component='h3'
      >
        Archivo de Respuesta de Aduana: .err
      </Typography>

      <Grid
        container
        sx={{alignItems: 'center', padding: '0 20%', textAlign: 'center'}}
        spacing={3}
      >
        {archivo.map((archivoUnico, i) => {
          return (
            <>
              {typeof archivoUnico !== 'string' ? (
                <>
                  <Grid item xs={6}>
                    <Typography
                      variant='h4'
                      color='secondary.dark'
                      sx={{cursor: 'pointer'}}
                      component='h4'
                    >
                      {`${archivoUnico.pedimento}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant='h4'
                      color='secondary.dark'
                      sx={{cursor: 'pointer'}}
                      component='h4'
                      onClick={() => modalErrores(archivoUnico, erroresJus[i])}
                    >
                      {`${archivoUnico.error}`}
                    </Typography>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12}>
                    <Typography
                      variant='h4'
                      color='primary.dark'
                      component='h4'
                    >
                      {`${archivoUnico}`}
                    </Typography>
                  </Grid>
                </>
              )}
            </>
          );
        })}
      </Grid>
      <ModalDetail
        detalle={detalle}
        openModal={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default ArchivoRespuesta;
