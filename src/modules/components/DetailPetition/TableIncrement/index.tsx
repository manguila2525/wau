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
function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [createData(58.878, 0, 0, 4, 0)];

const index = ({title, data}) => {
  const {messages} = useIntl();
  return (
    <>
      <Box sx={{margin: '30px 0'}}>
        <Typography variant='h4' align='center' color='primary' component='h3'>
          {title}
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
                    {messages['detailPetition.tableIncrement.embalajes']}
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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='center'>{row.calories}</TableCell>
                  <TableCell align='center'>{row.fat}</TableCell>
                  <TableCell align='center'>{row.carbs}</TableCell>
                  <TableCell align='center'>{row.protein}</TableCell>
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
