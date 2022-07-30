import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {AppCard} from '../../../@crema';
import styles from './styles';
import Title from '../TitleMain';
import Link from 'next/link';
import {useIntl} from 'react-intl';
import {IListaPedimentos} from '../../../models/IListaPedimentos';

interface Info {
  data: {
    resultado: Array<IListaPedimentos>;
  };
  // data: Array<IListaArchivos>;
}

const Index = (props: Info) => {
  const {data} = props;
  console.log(data);
  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
    uno,
    siete,
    ocho,
    nueve,
    diez,
    once,
    doce,
  ) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      uno,
      siete,
      ocho,
      nueve,
      diez,
      once,
      doce,
    };
  }
  const {messages} = useIntl();
  return (
    <Box sx={{marginTop: '20px'}}>
      <Title title='Visualizar respuesta' />
      <AppCard>
        <TableContainer>
          <Table sx={{minWidth: 650}} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.pedimento'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.estatus'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.tipoDePago'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.tipoDeOperacion'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.cvDocumento'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.aduSec'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.valorAduana'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.impuestoEfectivo'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.impuestoNoEfectivo'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.cvPrevalidado'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.fechaEntrada'
                    ]
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    messages[
                      'visorPedimentos.visualizarRespuesta.pedimentos.fechaPago'
                    ]
                  }
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.resultado.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component='th' scope='row'>
                    <Link href={`/prevalidador/visor-pedimentos/14352`}>
                      <a>{row.pedimento}</a>
                    </Link>
                  </TableCell>
                  <TableCell align='right'>
                    <div className='flex'>
                      <SummarizeIcon
                        fontSize='small'
                        color='primary'
                      ></SummarizeIcon>
                      {row.status}
                    </div>
                  </TableCell>
                  <TableCell align='right'> {row.status}</TableCell>
                  <TableCell align='right'>{row.tipoOperacion}</TableCell>
                  <TableCell align='right'>{row.claveDocumento}</TableCell>
                  <TableCell align='right'>{row.aduana}</TableCell>
                  <TableCell align='right'>{row.aduana}</TableCell>
                  <TableCell align='right'>{row.impuestoEfectivo}</TableCell>
                  <TableCell align='right'>{row.impuestoNoEfectivo}</TableCell>
                  <TableCell align='right'>{row.idPrevalidador}</TableCell>
                  <TableCell align='right'>{row.fechaEntPre}</TableCell>
                  <TableCell align='right'>{row.fechaPago}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AppCard>
      <style jsx>{styles}</style>
    </Box>
  );
};

export default Index;
