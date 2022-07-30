import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const index = () => {
  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <Grid
          container
          direction='row'
          spacing={2}
          justifyContent='space-evenly'
          sx={{padding: ''}}
        >
          <Grid item xs={2}>
            <Button sx={{width: '100%'}} variant='contained'>
              Pedimento
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{width: '100%'}} variant='contained'>
              Archivo
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{width: '100%'}} variant='contained'>
              Documentos
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{width: '100%'}} variant='contained'>
              SOIA
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button disabled sx={{width: '100%'}} variant='contained'>
              Notas
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default index;
