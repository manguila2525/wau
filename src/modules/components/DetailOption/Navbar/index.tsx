import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const index = ({handleTableInfo}) => {
  const changeTableInfo = (data) => {
    handleTableInfo(data);
  };
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container direction='row' spacing={2} justifyContent='space-evenly'>
        <Grid item xs={2}>
          <Button
            onClick={() => changeTableInfo('GUIDES')}
            sx={{width: '100%'}}
            variant='outlined'
          >
            Guias
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => changeTableInfo('BILLS')}
            sx={{width: '100%'}}
            variant='outlined'
          >
            Facturas
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => changeTableInfo('FRACTIONS')}
            sx={{width: '100%'}}
            variant='outlined'
          >
            Fracciones
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => changeTableInfo('TAXES')}
            sx={{width: '100%'}}
            variant='outlined'
          >
            Impuestos
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            sx={{width: '100%'}}
            onClick={() => changeTableInfo('LOGISTICS')}
            variant='outlined'
          >
            Logistica
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default index;
