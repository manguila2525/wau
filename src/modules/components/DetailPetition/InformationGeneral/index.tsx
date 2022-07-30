import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useIntl} from 'react-intl';
export default function index({data}) {
  const [informacion, setInformacion] = useState(data.datos[0].resultado.pedimentos);
  console.log(informacion);
  const {messages} = useIntl();
  return (
    <>
      <Typography
        variant='h2'
        align='center'
        sx={{margin: '20px 0'}}
        component='h3'
      >
        {messages['detailPetition.informationGeneral.informacionGeneral']}
      </Typography>
      {informacion.map((pedimento, i) => {
        return (
          <Box key={i} sx={{flexGrow: 1}}>
            <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
              <Grid item xs={12} md={2}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.importador']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant='h3' component='h3'>
                  {pedimento.datos.nombreImportadorExportador}
                </Typography>
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.rfc']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant='h3' component='h3'>
                  {pedimento.datos.rfcImportadorExportador}
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{margin: '20px 0'}}>
              <hr />
            </Box>
            <Grid container sx={{alignItems: 'center'}} spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {
                    messages[
                      'detailPetition.informationGeneral.numeroPedimento'
                    ]
                  }
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  {pedimento.cfdi[0].numeroPedimento}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.patente']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  {pedimento.inicio.patente}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.tipoOperacion']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  {pedimento.datos.tipo}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.tipoCambio']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  {pedimento.datos.tipoCambio}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.aduana']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  {pedimento.inicio.aduana}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.status']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  INVALIDADO
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.claveDocumento']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant='h4' component='h3'>
                  {pedimento.datos.clave}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.pesoBruto']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  {pedimento.datos.pesoBruto}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.guia']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  ONEYTY9MA0578600
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.fechaEntrada']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  16/03/22
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.fechaPago']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  16/03/22
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {
                    messages[
                      'detailPetition.informationGeneral.transporteSalida'
                    ]
                  }
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  {pedimento.datos.transporteSalida}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {
                    messages[
                      'detailPetition.informationGeneral.clavePrevalidador'
                    ]
                  }
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' component='h3'>
                  {pedimento.datos.clave}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h1'>
                  {messages['detailPetition.informationGeneral.observaciones']}
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant='h4' component='h3'>
                  {pedimento.observaciones[0].observaciones}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </>
  );
}
