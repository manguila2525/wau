import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useEffect, useState} from 'react';

interface Errores {
  erroresJustificables: Array<{}>;
  errores: Array<{pedimento: string}>;
}

const ListaErroresJustificables = (props: Errores) => {
  const {erroresJustificables, errores} = props;
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
          Pedimentos con Solicitudes de Justificacion:
        </Typography>
        <TableContainer sx={{padding: '0 20px', margin: '5px 0'}}>
          <Table size='small' aria-label='a dense table'>
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
                    Aduana
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Fecha Sol
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Error
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Cliente
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Contacto
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Evento
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Fecha/Hora
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {errores.map((error, i) => {
                if (typeof error !== 'string') {
                  return (
                    <TableRow
                      key={i}
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell align='center'>{error.pedimento}</TableCell>
                      <TableCell align='center'>2</TableCell>
                      <TableCell align='center'>1</TableCell>
                      <TableCell align='center'>2</TableCell>
                      <TableCell align='center'>2</TableCell>
                      <TableCell align='center'>1</TableCell>
                      <TableCell align='center'>2</TableCell>
                      <TableCell align='center'>1</TableCell>
                      <TableCell align='center'>2</TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ListaErroresJustificables;
