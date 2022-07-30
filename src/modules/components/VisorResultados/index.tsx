import {useState} from 'react';
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
import {useIntl} from 'react-intl';
import {IListaArchivos} from '../../../models/IListaArchivos';

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
    id,
    archivo,
    aduana,
    fechaProcesado,
    fechaRecibido,
    idPrevalidador,
    idContacto,
  } = row;
  const [open, setOpen] = useState(false);
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
            <SimCardDownloadIcon
              color='success'
              fontSize='small'
            ></SimCardDownloadIcon>
            <Link href={`/prevalidador/visor-archivos/detalle/${id}`}>
              {archivo}
            </Link>
          </div>
        </TableCell>
        <TableCell align='right'>{aduana}</TableCell>
        <TableCell align='right'>{fechaProcesado}</TableCell>
        <TableCell align='right'>
          <div className='flex--end'>
            <SimCardDownloadIcon
              color='success'
              fontSize='small'
            ></SimCardDownloadIcon>

            {archivo}
          </div>
        </TableCell>
        <TableCell align='right'>
          <div className='flex--end'>
            <SimCardDownloadIcon
              color='success'
              fontSize='small'
            ></SimCardDownloadIcon>
            {archivo}
          </div>
        </TableCell>
        <TableCell align='right'>{idPrevalidador}</TableCell>
        <TableCell align='right'>{idContacto}</TableCell>
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
                Detalles de busqueda
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead key='thead'>
                  <TableRow>
                    <TableCell align='center'>Pedimento</TableCell>
                    <TableCell align='right'>Tipo Operacion</TableCell>
                    <TableCell align='right'>Cve Documento</TableCell>
                    <TableCell align='right'>Importador / Exportador</TableCell>
                    <TableCell align='right'>Fecha Entrada</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody key='tbody'>
                  <TableRow>
                    <TableCell align='center'>
                      <Link href={`/prevalidador/visor-archivos/${id}`}>
                        <a>{fechaRecibido}</a>
                      </Link>
                    </TableCell>
                    <TableCell align='right'>{fechaRecibido}</TableCell>
                    <TableCell align='right'>{100}</TableCell>
                    <TableCell align='right'>{100}</TableCell>
                    <TableCell align='right'>{fechaRecibido}</TableCell>
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
      {data.resultado.length === 0 ? (
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
                    <TableCell align='center'>
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
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody key='tbody'>
                  {data.resultado.map((row: IListaArchivos, i) => {
                    return <Row key={i} row={row} />;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </AppCard>
        </Box>
      )}
    </>
  );
}
