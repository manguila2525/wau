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
          {messages['detailPetition.tableIdent.identificadores']}
        </Typography>

        <TableContainer>
          <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    variant='h5'
                    align='center'
                    component='h5'
                  ></Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIdent.comp1']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIdent.comp2']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIdent.comp3']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIdent.clave']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIdent.comp1']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIdent.comp2']}
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    {messages['detailPetition.tableIdent.comp3']}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {informacion.identificadores.map((row) => (
                <TableRow
                  key={row.numeroPedimento}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component='th' scope='row'>
                    {row.claveIdentificador}
                  </TableCell>
                  <TableCell align='center'>{row.complemento1}</TableCell>
                  <TableCell align='center'>{row.complemento2}</TableCell>
                  <TableCell align='center'>{row.complemento3}</TableCell>
                  <TableCell align='center'>{row.claveIdentificador}</TableCell>
                  <TableCell align='center'>{row.complemento1}</TableCell>
                  <TableCell align='center'>{row.complemento2}</TableCell>
                  <TableCell align='center'>{row.complemento3}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default index;
