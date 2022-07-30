import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [createData(58.878, 0, 0, 4.0, 5)];

const index = () => {
  return (
    <>
      <Box sx={{margin: '30px 0'}}>
        <Typography variant='h4' align='center' color='primary' component='h3'>
          Guías/BLs
        </Typography>

        <TableContainer>
          <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h5' align='center' component='h5'>
                    Fletes
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Seguros
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component='th' align='center' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='center'>{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{marginTop: '30px'}}>
          <Typography
            variant='h4'
            align='center'
            color='primary'
            component='h3'
            sx={{margin: '20px 0'}}
          >
            Detalle de la Mercancía a Granel Declarada en el Pedimento
          </Typography>
          <TableContainer>
            <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant='h5' align='center' component='h5'>
                      Descripción
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='h5' align='center' component='h5'>
                      Cantidad
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='h5' align='center' component='h5'>
                      Unidad
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  >
                    <TableCell component='th' align='center' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='center'>{row.calories}</TableCell>
                    <TableCell align='center'>{row.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default index;
