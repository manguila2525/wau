import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
interface Detalle {
  error: string;
  idErrorM3: number;
  detalle: {
    respuesta: string;
  };
}

interface Error {
  error: Detalle;
}

const TablaErrorDescripcion = (props: Error) => {
  const {error} = props;

  return (
    <>
      <TableContainer sx={{padding: '0 20px', margin: '5px 0'}}>
        <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h5' align='center' component='h5'>
                  Error
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Descripcion
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              <TableCell align='center'>{error.idErrorM3}</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablaErrorDescripcion;
