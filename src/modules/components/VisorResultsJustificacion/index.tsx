import {useState} from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import {useIntl} from 'react-intl';
import {IListaArchivos} from '../../../models/IListaArchivos';
import axios from 'axios';

interface Info {
  data: {
    resultado: Array<IListaArchivos>;
  };
  // data: Array<IListaArchivos>;
}

interface DataGet {
  row;
}

const Row = (props: DataGet) => {
  const {row} = props;
  const {
    pedimento,
    archivo,
    aduana,
  patente,
  fecha,
  estatus,
  idJustificacion
  } = row;
  const [open, setOpen] = useState(false);

  const [informacion, setInformacion] = useState({
    pedimento,
    archivo,
    aduana,
  patente,
  fecha,
  estatus,
  idJustificacion
  })

  const changeStateJustify = async (type: number) => {
    alert("Cargando espere un momento")
    await axios.post(`https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/estado/${informacion.idJustificacion}/${type}`)
    console.log(pedimento);
    const {data} = await axios.get("https://ozib7lr4z1.execute-api.us-east-1.amazonaws.com/api/api/archivo/14352");
    console.log(data.datos[0].resultado.pedimentos[0].id);
    const justificacion = await axios.get("https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/2000022")
    setInformacion({
      pedimento:data.datos[0].resultado.pedimentos[0].id,
      patente:data.archivo.patente,
      aduana: data.archivo.aduana,
      fecha: justificacion.data.fechaCreacion,
      estatus:justificacion.data.status.descripcion,
      idJustificacion: justificacion.data.id,
    });
    console.log(type);
  };

  return (
    <>
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
            {/* <Link href={`/prevalidador/visor-archivos/detalle/${id}`}> */}
              {informacion.pedimento}
            {/* </Link> */}
          </div>
        </TableCell>
        <TableCell align='right'>{informacion.patente}</TableCell>
        <TableCell align='right'>{informacion.aduana}</TableCell>

        <TableCell align='right'>
          <div className='flex--end'>
    

            {informacion.fecha.substring(0,10)}
          </div>
        </TableCell>
        <TableCell align='right'>
          <div className='flex--end'>
          
            {informacion.estatus}
          </div>
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
                Logistica de justificacion
              </Typography>
              <div className='flex--end'>
                <Button
                  variant='contained'
                  sx={{margin: '0 2px'}}
                  onClick={() => changeStateJustify(5)}
                >
                  Rechazada por Aduana
                </Button>
                <Button
                  variant='contained'
                  sx={{margin: '0 2px'}}
                  onClick={() => changeStateJustify(6)}
                >
                  Justificada por Aduana
                </Button>
                <Button
                  variant='contained'
                  sx={{margin: '0 2px'}}
                  onClick={() => changeStateJustify(4)}
                >
                  Enviada a Aduana
                </Button>
                <Button
                  variant='contained'
                  sx={{margin: '0 2px'}}
                  onClick={() => changeStateJustify(3)}
                >
                  Rechazada por preval
                </Button>
              </div>
              <Table size='small' aria-label='purchases'>
                <TableHead key='thead'>
                  <TableRow>
                    <TableCell align='center'>Evento</TableCell>
                    <TableCell align='right'>Fecha/Hora</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody key='tbody'>
                  <TableRow>
                    <TableCell align='center'>
                      {/* <Link href={`/prevalidador/visor-archivos/${id}`}> */}
                        <a>{informacion.estatus}</a>
                      {/* </Link> */}
                    </TableCell>
                    <TableCell align='right'>{informacion.fecha.substring(0,10)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <style jsx>{styles}</style>
    </>
  );
};

export default function CollapsibleTable(props: Info) {
  const {data} = props;
  const {messages} = useIntl();
  console.log(data);
  return (
    <>
      {
        false
      // data.resultado.length === 0 
      ? (
        <AppCard sx={{marginTop: '20px'}}>
          <Box>
            <h1>No existe la consulta</h1>
          </Box>
        </AppCard>
      ) : (
        <Box sx={{marginTop: '20px'}}>
          <Title title='Visualizar respuesta' />
          <AppCard>
            <TableContainer>
              <Table aria-label='collapsible table'>
                <TableHead key='thead'>
                  <TableRow>
                    <TableCell />
                    <TableCell align='center'>Pedimento</TableCell>
                    <TableCell align='right'>Patente</TableCell>
                    <TableCell align='right'>Aduana</TableCell>
                    <TableCell align='right'>Fecha de Justificacion</TableCell>
                    <TableCell align='right'>Estatus</TableCell>
                    {/* <TableCell align='center'>
                      {
                        messages[
                          'visorArchivos.visualizarRespuesta.archivosPrevalidados.archivo'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorArchivos.visualizarRespuesta.archivosPrevalidados.aduana'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorArchivos.visualizarRespuesta.archivosPrevalidados.envio'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorArchivos.visualizarRespuesta.archivosPrevalidados.validacion'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorArchivos.visualizarRespuesta.archivosPrevalidados.prevalidacion'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorArchivos.visualizarRespuesta.archivosPrevalidados.prevalidador'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorArchivos.visualizarRespuesta.archivosPrevalidados.contacto'
                        ]
                      }
                    </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody key='tbody'>
                  {/* {data.resultado.map((row: IListaArchivos, i) => {
                    return <Row key={i} row={row} />;
                  })} */}
                  <Row  row={data} />
                </TableBody>
              </Table>
            </TableContainer>
          </AppCard>
        </Box>
      )}
    </>
  );
}
