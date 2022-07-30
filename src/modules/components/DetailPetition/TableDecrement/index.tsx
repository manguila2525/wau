import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useIntl} from 'react-intl';

const index = ({data}) => {
  const [informacion, setInformacion] = useState(data);
  const {messages} = useIntl();
  return (
    <>
      <Box sx={{margin: '30px 0'}}>
        <Typography variant='h4' align='center' color='primary' component='h3'>
          {messages['detailPetition.tableIncrement.decrementable']}
        </Typography>

        <TableContainer>
          <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIncrement.fletes']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIncrement.seguros']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIncrement.sube']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIncrement.baja']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIncrement.otros']}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={informacion.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component='th' scope='row'>
                  {informacion.datos.decrementablesFletes}
                </TableCell>
                <TableCell align='center'>
                  {informacion.datos.decrementablesSeguros}
                </TableCell>
                <TableCell align='center'>
                  {informacion.datos.decrementablesSeguros}
                </TableCell>
                <TableCell align='center'>
                  {informacion.datos.decrementablesDescarga}
                </TableCell>
                <TableCell align='center'>
                  {informacion.datos.decrementablesOtros}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default index;
