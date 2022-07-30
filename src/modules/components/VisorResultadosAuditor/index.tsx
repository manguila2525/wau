import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import {AppCard} from '../../../@crema';
import Title from '../TitleMain';
import styles from './styles';

function createData(
  name: string,
  calories: number,
  fat: string,
  carbs: string,
  protein: string,
  price: string,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
    ],
  };
}
interface Info {
  row;
}
interface Resultado {
  aduana: string;
  aduanaNombre: string;
  apellidoContacto: string;
  archivo: string;
  clientRfc: string;
  clienteId: string;
  clienteRazonSocial: string;
  contactoId: string;
  fechaProcesado: string;
  fechaRecibido: string;
  fechaRespuesta: string;
  id: string;
  idCliente: string;
  idContacto: string;
  idPrevalidador: string;
  nombreContacto: string;
  patenteAsociado: string;
  patenteIdPatenteAnterior: string;
  patenteIdRepresentanteLegal: string;
  patenteTipo: string;
  resultado: string;
  status: string;
  tipoArchivo: string;
}
interface DataComplete {
  data: {
    total: number;
    resultado: Array<Resultado>;
  };
}
function Row(props: Info) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          <div className='flex'>
            {row.patenteAsociado === null ? 'Vacio' : row.patenteAsociado}
          </div>
        </TableCell>
        <TableCell align='right'>
          {row.aduana === null ? 'Vacio' : row.aduana}
        </TableCell>
        <TableCell align='right'>
          {row.idPrevalidador === null ? 'Vacio' : row.idPrevalidador}
        </TableCell>
        <TableCell align='right'>
          <div className='flex--end'>
            <SimCardDownloadIcon
              color='success'
              fontSize='small'
            ></SimCardDownloadIcon>
            {row.status === null ? 'Vacio' : row.status}
          </div>
        </TableCell>
        <TableCell align='right'>
          <div className='flex--end'>
            <SimCardDownloadIcon
              color='success'
              fontSize='small'
            ></SimCardDownloadIcon>
            {row.status === null ? 'Vacio' : row.status}
          </div>
        </TableCell>
        <TableCell align='right'>
          {row.fechaRespuesta === null ? 'Vacio' : row.fechaRespuesta}
        </TableCell>
        <TableCell align='right'>
          {row.nombreContacto === null ? 'Vacio' : row.nombreContacto}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={8}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{margin: 1}}>
              <Typography
                variant='h5'
                color='primary'
                gutterBottom
                component='h5'
              >
                Archivos Revisados
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Pedimento</TableCell>
                    <TableCell align='right'>Aduana</TableCell>
                    <TableCell align='right'>Clave Doc.</TableCell>
                    <TableCell align='right'>Tipo Oper.</TableCell>
                    <TableCell align='right'>Fecha Pago</TableCell>
                    <TableCell align='right'>Fecha Entrada</TableCell>
                    <TableCell align='right'>RFC</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align='center'>
                      <Link href={`/prevalidador/auditor-archivos/${row.id}`}>
                        <a> {row.id === null ? 'Vacio' : row.id}</a>
                      </Link>
                    </TableCell>
                    <TableCell align='right'>
                      {row.aduana === null ? 'Vacio' : row.aduana}
                    </TableCell>
                    <TableCell align='right'>{100}</TableCell>
                    <TableCell align='right'>
                      {row.patenteTipo === null ? 'Vacio' : row.patenteTipo}
                    </TableCell>
                    <TableCell align='right'>{100}</TableCell>
                    <TableCell align='right'>
                      {row.fechaRecibido === null ? 'Vacio' : row.fechaRecibido}
                    </TableCell>
                    <TableCell align='right'>
                      {row.clientRfc === null ? 'Vacio' : row.clientRfc}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <style jsx>{styles}</style>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props: DataComplete) {
  const {data} = props;
  console.log(data);
  return (
    <Box sx={{marginTop: '20px'}}>
      <Title title='Visualizar respuesta' />
      <AppCard>
        <TableContainer>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Patente</TableCell>
                <TableCell align='right'>Aduana</TableCell>
                <TableCell align='right'>Prevalidador</TableCell>
                <TableCell align='right'>Envío</TableCell>
                <TableCell align='right'>Revisión</TableCell>
                <TableCell align='right'>Fecha Pag.</TableCell>
                <TableCell align='right'>Contacto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.resultado.map((row, i) => (
                <Row key={i} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AppCard>
    </Box>
  );
}
