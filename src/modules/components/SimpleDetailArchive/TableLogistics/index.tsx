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

const rows = [
  createData(58.878, 0, 0, 4.0, 5),
  createData(58.878, 0, 0, 4.0, 5),
];

const index = () => {
  return (
    <>
      <Typography
        variant='h4'
        align='center'
        color='primary'
        component='h3'
        sx={{margin: '20px 0'}}
      >
        Logística del Pedimento
      </Typography>

      <TableContainer>
        <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h5' align='center' component='h5'>
                  Fecha y Hora
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Parte II
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Estado
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Subestado
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
                <TableCell align='center'>{row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant='h5'
        align='center'
        component='h3'
        sx={{color: '#515151'}}
      >
        Tiempos Totales
      </Typography>
      <TableContainer>
        <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h5' align='center' component='h5'>
                  Descripción del impuesto
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Cantidad pagada
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
    </>
  );
};

export default index;
