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
      <Typography
        variant='h4'
        align='center'
        color='primary'
        component='h3'
        sx={{margin: '20px 0'}}
      >
        Detalle de las Facturas Declaradas en el Pedimento
      </Typography>
      <Typography
        variant='h5'
        align='center'
        component='h3'
        sx={{color: '#515151'}}
      >
        Proveedor: CONDUMEX, INCORPORATED
      </Typography>
      <TableContainer>
        <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h5' align='center' component='h5'>
                  Núm. de Fac. o COVE
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  País Or.
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Mon. Fact.
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Val. Mon. Ext.
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Val. en Dól.
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Incoterm
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h5' align='center' component='h5'>
                  Fecha
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
                <TableCell align='center'>{row.calories}</TableCell>
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
