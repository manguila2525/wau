import Grid from '@mui/material/Grid';
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
        <Typography
          variant='h4'
          align='center'
          sx={{margin: '20px 0'}}
          color='primary'
          component='h3'
        >
          Detalle de la Fracción. Partida No. 1
        </Typography>

        <Grid container sx={{alignItems: 'center'}} spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              Fracción arancelaria:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              74199901 - TERMINALES DE COBRE
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              Precio pagado:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              41,028
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              Valor Aduana/Comercial:
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              47,304
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              Valor en Dolares:
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              1,988.70
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              Cant. de Mercancía UMC:
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              42,000.000
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              UMC:
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              PIEZA
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              Cant. de Mercancía UMT:
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              38.200
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              UMT:
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              KILO
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h3' component='h1'>
              Observaciones:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant='h4' sx={{color: '#515151'}} component='h3'>
              No. De parte: 1-962915-1
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{margin: '30px 0'}}>
          <Typography
            variant='h4'
            align='center'
            color='primary'
            component='h3'
          >
            IDENTIFICADORES
          </Typography>

          <TableContainer>
            <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant='h5' align='center' component='h5'>
                      Clave
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='h5' align='center' component='h5'>
                      Comp. 1
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='h5' align='center' component='h5'>
                      Comp. 2
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
