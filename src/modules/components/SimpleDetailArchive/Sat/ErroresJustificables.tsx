import {useEffect, useState} from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Acotaciones from './Acotaciones';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';

import ModalErrores from './ModalErrores';
interface Resultado {
  data: {data: {pedimentos: Array<{id: string}>}};
}
interface Archivo {
  errores: Array<string>;
  archivo: Array<string>;
  informacionGlobal: {
    aduana: string;
    patente: string;
  };
  dataPedimentos: {
    datos: Array<{resultado: {pedimentos: Array<{id: any}>}}>;
    result: Array<Resultado>;
  };
  cambiarErroresJustificables: (errores) => void;
}

const ErroresJustificables = (props: Archivo) => {
  const {
    errores,
    archivo,
    informacionGlobal,
    dataPedimentos,
    cambiarErroresJustificables,
  } = props;

  let fecha = new Date();
  let diaFecha = fecha.toDateString().split(' ')[0];
  let horas = fecha.getHours();

  const [detalle, setDetalle] = useState({
    registro: '',
    linea: '',
    campo: '',
    tipo: '',
    consecutivo: '',
    respuesta: '',
    detalle: [],
  });
  const [erroresJus, setErroresJus] = useState<
    {
      detalle: {};
      linea: number;
      pedimento: number;
      tipo: number;
    }[]
  >([]);
  const [openModal, setOpenModal] = useState(false);

  const modalErrores = async (archivo, id) => {
    // const errores = archivo.filter((error) => typeof error !== 'string');
    let erroresArray = [];
    const errores = archivo.split(' ');
    const erroresTotal = errores.filter((error) => error[0] === 'E');
    erroresTotal.map(async (errorJustificable) => {
      const {data} = await axios.get(
        `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/errorM3/${errorJustificable}`,
      );
      // erroresArray.push(data);
      console.log(data);
      console.log(id);
      setErroresJus((oldArray) => [...oldArray, data]);
    });
    const {data} = await axios.post(
      `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/crear/${id}`,
      {
        idPedimento: id,
        errores: erroresTotal,
      },
    );

    console.log(data.idPedimento);
    const detalleJustificacion = await axios.get(
      `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/${id}`,
    );
    console.log(detalleJustificacion.data);
    setDetalle(detalleJustificacion.data);
    setOpenModal(true);
  };
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  useEffect(() => {
    console.log(erroresJus);
  }, [erroresJus]);

  return (
    <>
      <Box sx={{margin: '30px 0'}}>
        <Typography
          variant='h4'
          align='center'
          sx={{margin: '20px 0'}}
          color='primary'
          component='h3'
        >
          Pedimentos con Errores Justificables
        </Typography>
        <TableContainer>
          <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h5' align='center' component='h5'>
                    Pedimento
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Patente
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Aduana/Sección
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Solicitar
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataPedimentos.datos[0].resultado.pedimentos.map((pedimento) => {
                return (
                  <>
                    <TableRow
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell component='th' align='center' scope='row'>
                        {pedimento.id}
                      </TableCell>
                      <TableCell align='center'>9999</TableCell>
                      <TableCell align='center'>230</TableCell>
                      <TableCell align='center'>
                        <Button
                          variant='contained'
                          size='small'
                          onClick={() => {
                            // if (
                            //   horas >= 8 &&
                            //   horas <= 15 &&
                            //   diaFecha !== 'Sat' &&
                            //   diaFecha !== 'Sun'
                            // ) {
                            //   modalErrores(archivo, pedimento.id);
                            // } else {
                            //   alert(
                            //     'No estas en hora ni fecha disponible para realizar una justificacion',
                            //   );
                            // }
                            modalErrores(errores, pedimento.id);
                          }}
                        >
                          <ArticleIcon /> Justificacion
                        </Button>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Acotaciones />

      <ModalErrores
        detalle={detalle}
        openModal={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
        informacionGlobal={informacionGlobal}
        cambiarErroresJustificables={cambiarErroresJustificables}
      />
    </>
  );
};

export default ErroresJustificables;
