import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useIntl} from 'react-intl';
import {AppCard} from '@crema';
function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [createData(58.878, 0, 0, 4, 0)];
export default function index({data}) {
  const [informacion, setInformacion] = useState(data);
  console.log(informacion);
  const {messages} = useIntl();
  return (
    <>
      {informacion.datos[0].data.data.pedimentos.map((val, i) => (
        <AppCard key={i} sx={{my: '10px'}}>
          <Box sx={{margin: '10px 0'}}>
            <Typography
              variant='h3'
              color='primary'
              sx={{textAlign: 'center'}}
              component='h1'
            >
              {messages['detailAuditor.informationGeneral.pedimento']} {i + 1}
            </Typography>
          </Box>
          <Box sx={{flexGrow: 1}}>
            <Box sx={{margin: '20px 0'}}>
              <Typography variant='h5' component='h1'>
                Referencia 22 47 {val.inicio && val.inicio.patente}{' '}
                {val.inicio && val.inicio.pedimento}
              </Typography>
            </Box>
            <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
              {val.inicio && (
                <>
                  <Grid item xs={12} md={3}>
                    <Typography variant='h5' component='h1'>
                      {
                        messages[
                          'detailAuditor.informationGeneral.numeroPedimento'
                        ]
                      }
                      {val.inicio.pedimento}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant='h5' component='h5'>
                      {
                        messages[
                          'detailAuditor.informationGeneral.tipoOperacion'
                        ]
                      }
                      {val.inicio.tipoMovimiento}
                    </Typography>
                  </Grid>
                </>
              )}

              {val.datos && (
                <>
                  <Grid item xs={12} md={3}>
                    <Typography variant='h5' component='h1'>
                      {
                        messages[
                          'detailAuditor.informationGeneral.cvePedimento'
                        ]
                      }
                      {informacion.datos.clave}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant='h5' component='h5'>
                      {messages['detailAuditor.informationGeneral.regimen']} --
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
            {val.datos && (
              <>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Typography variant='h5' component='h1'>
                      {messages['detailAuditor.informationGeneral.destino']}
                      {val.datos.origenDestino}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant='h5' component='h5'>
                      {messages['detailAuditor.informationGeneral.tipoCambio']}
                      {val.datos.tipoCambio}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant='h5' component='h1'>
                      {messages['detailAuditor.informationGeneral.pesoBruto']}
                      {val.datos.pesoBruto}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant='h5' component='h5'>
                      {messages['detailAuditor.informationGeneral.aduana']}
                      {val.datos.aduana}
                    </Typography>
                  </Grid>
                </Grid>
              </>
            )}

            {val.datos && (
              <>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Box sx={{margin: '10px 0'}}>
                  <Typography variant='h3' color='primary' component='h1'>
                    {
                      messages[
                        'detailAuditor.informationGeneral.mediosTransporte'
                      ]
                    }
                  </Typography>
                </Box>
                <Grid container sx={{alignItems: 'center'}} spacing={2}>
                  <Grid item container xs={12} md={6}>
                    <Grid item xs={12} md={4}>
                      <Typography variant='h5' component='h1'>
                        {messages['detailAuditor.informationGeneral.entrada']}
                        {val.datos.transporteEntradaSalida}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography
                        variant='h5'
                        sx={{color: '#515151'}}
                        component='h3'
                      >
                        {messages['detailAuditor.informationGeneral.arribo']}
                        {val.datos.transporteArribo}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant='h5' component='h1'>
                        {messages['detailAuditor.informationGeneral.salida']}
                        {val.datos.transporteSalida}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {val.cfdi.map((val) => (
                      <Typography
                        key={val.numeroPedimento}
                        variant='h5'
                        component='h5'
                      >
                        {
                          messages[
                            'detailAuditor.informationGeneral.valorDolares'
                          ]
                        }
                        {val.valorDolares}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </>
            )}
            {val.datos && (
              <>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Box sx={{margin: '10px 0'}}>
                  <Typography
                    variant='h3'
                    color='primary'
                    sx={{textAlign: 'center'}}
                    component='h1'
                  >
                    {
                      messages[
                        'detailAuditor.informationGeneral.datosImportadorExportador'
                      ]
                    }
                  </Typography>
                </Box>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
              </>
            )}
            {val.datos && (
              <>
                <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
                  <Grid item xs={12} md={2}>
                    <Typography variant='h5' component='h1'>
                      {messages['detailAuditor.informationGeneral.rfc']}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant='h5' component='h1'>
                      {val.datos.rfcImportadorExportador}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='h3' component='h3'>
                      {
                        messages[
                          'detailAuditor.informationGeneral.nombreDenominacionRazonSocial'
                        ]
                      }
                    </Typography>
                    <Typography variant='h5' component='h5'>
                      {val.datos.nombreImportadorExportador}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant='h5' component='h1'>
                      {messages['detailAuditor.informationGeneral.curp']}
                      {val.datos.curpAgente}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant='h5' component='h5'>
                      {messages['detailAuditor.informationGeneral.domicilio']}
                      {val.datos.paisImportadorExportador}
                    </Typography>
                  </Grid>
                </Grid>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
              </>
            )}

            <Box sx={{margin: '30px 0'}}>
              {val.datos && (
                <TableContainer>
                  <Table
                    sx={{minWidth: 650}}
                    size='small'
                    aria-label='a dense table'
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {/* VALIDAR */}
                            {
                              messages[
                                'detailAuditor.informationGeneral.valSeguros'
                              ]
                            }
                            {val.datos.seguros}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.seguros'
                              ]
                            }
                            {val.datos.seguros}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.fletes'
                              ]
                            }
                            {val.datos.flete}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.embalajes'
                              ]
                            }
                            {val.datos.embalajes}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.otrosIncrementables'
                              ]
                            }
                            {val.datos.incrementales}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {/* <TableBody>
                <TableRow
                  key={informacion.id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell align='center' component='th' scope='row'>
                    {informacion.datos.seguros}
                  </TableCell>
                  <TableCell align='center'>
                    {informacion.datos.seguros}
                  </TableCell>
                  <TableCell align='center'>
                    {informacion.datos.fletes}
                  </TableCell>
                  <TableCell align='center'>
                    {informacion.datos.embalajes}
                  </TableCell>
                  <TableCell align='center'>
                    {informacion.datos.incrementales}
                  </TableCell>
                </TableRow>
              </TableBody> */}
                  </Table>
                </TableContainer>
              )}
            </Box>
            <Box sx={{margin: '10px 0'}}>
              <hr />
            </Box>
            <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
              {val.datos && (
                <Grid item xs={12} md={6}>
                  <Typography variant='h5' component='h1'>
                    {
                      messages[
                        'detailAuditor.informationGeneral.codigoAceptacion'
                      ]
                    }
                    --
                    {val.datos && val.datos.codigoPostal}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} md={6}>
                <Typography variant='h5' component='h5'>
                  {
                    messages[
                      'detailAuditor.informationGeneral.claveSeccionAduaneraDespacho'
                    ]
                  }
                  {informacion.archivo[0].claveAduana}
                </Typography>
              </Grid>
            </Grid>

            {val.datos && (
              <>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Typography variant='h5' component='h1'>
                      {
                        messages[
                          'detailAuditor.informationGeneral.marcasNumerosTotalBultos'
                        ]
                      }
                      {val.datos.transporteSalida}
                    </Typography>
                  </Grid>
                </Grid>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
              </>
            )}
            <Grid container sx={{alignItems: 'center'}} spacing={2}>
              {val.fechas && (
                <Grid item container xs={12} md={6}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant='h5'
                      sx={{color: '#515151', textAlign: 'center'}}
                      component='h3'
                    >
                      {messages['detailAuditor.informationGeneral.fecha']}
                    </Typography>
                  </Grid>
                  {val.fechas.map((val, i) => (
                    <>
                      <Grid item xs={12} md={6}>
                        <Typography variant='h5' component='h1'>
                          {
                            messages[
                              'detailAuditor.informationGeneral.fechaEntrada2'
                            ]
                          }
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant='h5'
                          sx={{color: '#515151'}}
                          component='h3'
                        >
                          {val.fecha}
                        </Typography>
                      </Grid>
                    </>
                  ))}
                </Grid>
              )}
              {val.datos && (
                <Grid item xs={12} md={6}>
                  <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
                    <Grid item xs={12} md={12}>
                      <Typography
                        variant='h5'
                        color='primary'
                        sx={{textAlign: 'center'}}
                        component='h1'
                      >
                        {
                          messages[
                            'detailAuditor.informationGeneral.tasaNivelPedimento'
                          ]
                        }
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box sx={{margin: '10px 0'}}>
                    <hr />
                  </Box>
                  <TableContainer>
                    <Table
                      sx={{minWidth: 350}}
                      size='small'
                      aria-label='a dense table'
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <Typography
                              variant='h5'
                              align='center'
                              component='h5'
                            >
                              {
                                messages[
                                  'detailAuditor.informationGeneral.valSeguros'
                                ]
                              }
                            </Typography>
                          </TableCell>
                          <TableCell align='right'>
                            <Typography
                              variant='h5'
                              align='center'
                              component='h5'
                            >
                              {
                                messages[
                                  'detailAuditor.informationGeneral.seguros'
                                ]
                              }
                            </Typography>
                          </TableCell>
                          <TableCell align='right'>
                            <Typography
                              variant='h5'
                              align='center'
                              component='h5'
                            >
                              {
                                messages[
                                  'detailAuditor.informationGeneral.fletes'
                                ]
                              }
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          key={informacion.id}
                          sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                          <TableCell align='center'>
                            {informacion.datos.seguros}
                          </TableCell>
                          <TableCell align='center'>
                            {informacion.datos.seguros}
                          </TableCell>
                          <TableCell align='center'>
                            {informacion.datos.flete}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              )}
            </Grid>
            {val.datos && (
              <>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant='h3'
                      color='primary'
                      sx={{textAlign: 'center'}}
                      component='h1'
                    >
                      {
                        messages[
                          'detailAuditor.informationGeneral.cuadroLiquidacion'
                        ]
                      }
                    </Typography>
                  </Grid>
                </Grid>
              </>
            )}
            {val.datos && (
              <>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <TableContainer>
                  <Table
                    sx={{minWidth: 650}}
                    size='small'
                    aria-label='a dense table'
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.concepto'
                              ]
                            }
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {messages['detailAuditor.informationGeneral.fp']}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.importe'
                              ]
                            }
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.concepto'
                              ]
                            }
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {messages['detailAuditor.informationGeneral.fp']}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.importe'
                              ]
                            }
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
                          <TableCell align='center'>{row.name}</TableCell>
                          <TableCell align='center'>{row.calories}</TableCell>
                          <TableCell align='center'>{row.fat}</TableCell>
                          <TableCell align='center'>{row.fat}</TableCell>
                          <TableCell align='center'>{row.fat}</TableCell>
                          <TableCell align='center'>{row.fat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Grid container sx={{alignItems: 'baseline'}} spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant='h3'
                      color='primary'
                      sx={{textAlign: 'center'}}
                      component='h1'
                    >
                      {messages['detailAuditor.informationGeneral.totales']}
                    </Typography>
                  </Grid>
                </Grid>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <TableContainer>
                  <Table
                    sx={{minWidth: 650}}
                    size='small'
                    aria-label='a dense table'
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.efectivo'
                              ]
                            }
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {messages['detailAuditor.informationGeneral.otros']}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='h5'
                            align='center'
                            component='h5'
                          >
                            {
                              messages[
                                'detailAuditor.informationGeneral.totales'
                              ]
                            }
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
                          <TableCell align='center'>{row.name}</TableCell>
                          <TableCell align='center'>{row.calories}</TableCell>
                          <TableCell align='center'>{row.fat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Box>
        </AppCard>
      ))}
    </>
  );
}
