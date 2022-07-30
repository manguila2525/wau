import React, {useEffect, useState} from 'react';
import {AppCard} from '../../../@crema';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import styles from './style';
import HeaderDetailM3 from '../HeaderDetailM3';
import {cargarCampos} from '../ts/mezclarArchivos';
import Sat from './Sat';
import Siara from './Siara';
import axios from 'axios';
const err =
  'E2010716702000230506 E2010716702002530502 E2010716702002630502 C00010042';

const index = ({dataPedimentos}) => {
  const [informacionGlobal, setInformacionGlobal] = useState(
    dataPedimentos.archivo,
  );
  const [datosMezcla, setDatosMezcla] = useState(
    dataPedimentos.datos[0].resultado.pedimentos[0],
  );
  console.log(informacionGlobal);
  const [erroresJus, setErroresJus] = useState<
    {
      detalle: {};
      linea: number;
      pedimento: number;
      tipo: number;
    }[]
  >([]);
  const [mezcla, setMezcla] = useState([]);
  const [resultado, setResultado] = useState<() => void>();
  console.log(dataPedimentos);

  const erroresDetalle = async () => {
    const errores = err.split(' ');
    const erroresTotal = errores.filter((error) => error[0] === 'E');
    erroresTotal.map(async (errorJustificable) => {
      const {data} = await axios.get(
        `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/errorM3/${errorJustificable}`,
      );
      // erroresArray.push(data);
      console.log(data);
      setErroresJus((oldArray) => [...oldArray, data]);
      console.log(erroresJus);
    });
  };

  useEffect(() => {
    cargarCampos(datosMezcla, setMezcla);
    console.log(dataPedimentos.length);
    erroresDetalle();
  }, []);

  useEffect(() => {
    console.log(resultado);
  }, [resultado]);
  useEffect(() => {
    console.log(erroresJus);
  }, [erroresJus]);
  const resultTable = (dato, i) => {
    return (
      <div key={i}>
        <Box sx={{margin: '10px 0'}}>
          <hr />
        </Box>
        <Typography variant='h5' color='primary' align='left' component='h5'>
          {dato.claveM3}
          {dato.claveM3 === '501' && ' Datos'}
          {dato.claveM3 === '505' && ' Cfdi'}
          {dato.claveM3 === '800' && ' Efirma'}
          {dato.claveM3 === '507' && ' Identificadores'}
          {dato.claveM3 === '510' && ' Contribuciones'}
          {dato.claveM3 === '509' && ' Tasas'}
          {dato.claveM3 === '511' && ' Observaciones'}
          {dato.claveM3 === '500' && ' Inicio'}
          {dato.claveM3 === '506' && ' Fechas'}
          {dato.claveM3 === '503' && ' Guias'}
        </Typography>
        <Box sx={{margin: '10px 0'}}>
          <hr />
        </Box>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{marginTop: 1, wordWrap: 'break-word'}}
          >
            {dato.claveM3 === '511'
              ? dato.valores.map((result) => {
                  if (result.descripcion === 'Observaciones') {
                    return (
                      <>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            maxHeight: '300px',
                            overflow: 'auto',
                          }}
                        >
                          <Typography
                            sx={{
                              paddingY: '20px',
                              paddingX: '30px',
                            }}
                          >
                            {result.valor}
                          </Typography>
                        </Grid>
                      </>
                    );
                  }
                })
              : dato.valores.map((result) => {
                  return (
                    <>
                      <Grid item xs={6}>
                        <Typography>{result.descripcion}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{result.valor}</Typography>
                      </Grid>
                    </>
                  );
                })}
          </Grid>
        </Container>
      </div>
    );
  };

  const resultTablePartidas = (dato, i) => {
    const resultTablePartidasIdentificadores = (dato, i) => {
      return (
        <>
          {dato.numero.map((info) => {
            if (info.identificadores) {
              return info.identificadores.map((result, i) => {
                return (
                  <div key={i}>
                    <Box sx={{margin: '10px 0'}}>
                      <hr />
                    </Box>
                    <Typography
                      variant='h5'
                      color='primary'
                      align='left'
                      component='h5'
                    >
                      {result.claveM3} Identificadores a Nivel Partida
                    </Typography>
                    <Box sx={{margin: '10px 0'}}>
                      <hr />
                    </Box>
                    <Container>
                      <Grid container spacing={2} sx={{marginTop: 1}}>
                        <Grid item xs={6}>
                          <Typography>Tipo de Registro</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.claveM3}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                          <Typography>Pedimento</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.pedimento}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Fraccion</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.fraccion}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Numero de Partida</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.numero}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Tipo de Identificador</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.subdivision}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                          <Typography>Complemento 1</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.complemento1}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Complemento 2</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.complemento2}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Complemento 3</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.complemento3}</Typography>
                        </Grid>
                      </Grid>
                    </Container>
                  </div>
                );
              });
            }
          })}
        </>
      );
    };
    const resultTablePartidasPagoContribuciones = (dato, i) => {
      return (
        <>
          {dato.numero.map((info) => {
            if (info.pagoContribuciones) {
              return info.pagoContribuciones.map((result, i) => {
                return (
                  <div key={i}>
                    <Box sx={{margin: '10px 0'}}>
                      <hr />
                    </Box>
                    <Typography
                      variant='h5'
                      color='primary'
                      align='left'
                      component='h5'
                    >
                      {result.claveM3} Contribuciones a Nivel Partida
                    </Typography>
                    <Box sx={{margin: '10px 0'}}>
                      <hr />
                    </Box>
                    <Container>
                      <Grid container spacing={2} sx={{marginTop: 1}}>
                        <Grid item xs={6}>
                          <Typography>Tipo de Registro</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.claveM3}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                          <Typography>Fraccion</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.fraccion}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Importe</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.importe}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Linea</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.linea}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Numero de Pedimento</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.numeroPedimento}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Numero de Partida</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.partida}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                          <Typography>Valor</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{result.valor}</Typography>
                        </Grid>
                      </Grid>
                    </Container>
                  </div>
                );
              });
            }
          })}
        </>
      );
    };

    return (
      <div className='heightVh'>
        {dato.numero.map((info) => {
          return info.partidas.map((result, i) => {
            return (
              <div key={i}>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Typography
                  variant='h5'
                  color='primary'
                  align='left'
                  component='h5'
                >
                  {result.claveM3} Partidas
                </Typography>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Container>
                  <Grid container spacing={2} sx={{marginTop: 1}}>
                    <Grid item xs={6}>
                      <Typography>Tipo de Registro</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.claveM3}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography>Pedimento</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.pedimento}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Fraccion</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.fraccion}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Numero de Partida</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.numero}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Subdivisión de la Fracción</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.subdivision}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Descripción de la Mercancía</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.descripcion}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Precio Unitario</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.precio}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Valor Aduana</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.valorAduana}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Importe del Precio Pagado</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.importePrecio}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Valor en Dólares</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.valorDolares}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Cantidad UMC</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.cantidadMercanciaUmc}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>
                        Unidad de Medida de Comercialización
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.medidaComercializacion}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Cantidad UMT</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.cantidadMercanciaUmt}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Unidad de Medida de Tarifa</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.unidadTarifa}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Valor Agregado</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.valorAgregado}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Vinculación</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.vinculacion}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Metodo Valoracion</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.metodoValoracion}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Código del Producto</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.codigoProducto}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Marca</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.marca}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Modelo</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.modelo}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>País de Origen/Destino</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.paisOrigenDestino}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>País Comprador/Vendedor</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.paisVendedorComprador}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Entidad Federativa del Origen</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.entidadFederativaOrigen}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Entidad Federativa del Destino</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.entidadFederativaDestino}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Entidad del Comprador</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.entidadComprador}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Entidad del Vendedor</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>{result.entidadVendedor}</Typography>
                    </Grid>
                  </Grid>
                  {resultTablePartidasIdentificadores(dato, i)}
                  {resultTablePartidasPagoContribuciones(dato, i)}
                  {/* {resultTablePartidasIdentificadores(dato, i)}
                  {resultTablePartidasIdentificadores(dato, i)} */}
                </Container>
              </div>
            );
          });
        })}
        <style jsx>{styles}</style>
      </div>
    );
  };

  return (
    <>
      {dataPedimentos.datos[0].resultado.pedimentos !== null ? (
        <>
          <AppCard>
            <HeaderDetailM3 data={datosMezcla} />
          </AppCard>
          <br />
          <AppCard sx={{mb: 5}}>
            <Container>
              <Typography
                variant='h3'
                align='center'
                component='h3'
                sx={{margin: '20px 0'}}
              >
                Informacion General
              </Typography>

              <Grid container spacing={0}>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle1' component='h6'>
                    Nombre del Archivo:
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography>{informacionGlobal.archivo}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle1' component='h6'>
                    Patente:
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography>{informacionGlobal.patente}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant='subtitle1' component='h6'>
                    Nro de Pedimentos Incluido:
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography>
                    {/* {res.cfdi && res.cfdi.map((cfdi) => cfdi.numeroPedimento)} */}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </AppCard>
          {dataPedimentos.datos[0].resultado.pedimentos.map((res, i) => (
            <>
              <AppCard key={i} sx={{mb: 5}}>
                <Typography
                  variant='h5'
                  align='center'
                  component='h4'
                  sx={{color: '#515151', marginTop: 4}}
                >
                  Archivos de Respuestas
                </Typography>

                <Siara erroresM3={erroresJus} />

                <Container sx={{marginTop: 4}}>
                  <Typography
                    variant='h5'
                    align='center'
                    component='h4'
                    color='primary'
                    sx={{margin: 5}}
                  >
                    Resumen Prevalidacion
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Typography>Pedimento:</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>
                        {res.datos && res.datos.pedimento}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>Pedimento Correctos</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>1</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>Pedimento Incorrecto</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>1</Typography>
                    </Grid>
                  </Grid>
                </Container>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Container>
                  <Sat
                    erroresJus={erroresJus}
                    err={err}
                    informacionGlobal={informacionGlobal}
                    dataPedimentos={dataPedimentos}
                  />
                </Container>
                <Box sx={{margin: '10px 0'}}>
                  <hr />
                </Box>
                <Container>
                  <Typography
                    variant='h3'
                    align='center'
                    component='h4'
                    color='primary'
                    sx={{margin: '10px 0'}}
                  >
                    {res.datos && res.datos.pedimento}
                  </Typography>

                  {mezcla.length > 0 ? (
                    <>
                      <div className='heightVh'>
                        {mezcla.map((dato, i) => resultTable(dato, i))}
                      </div>
                    </>
                  ) : (
                    <Typography
                      variant='h3'
                      align='center'
                      component='h4'
                      color='primary'
                      sx={{margin: '10px 0'}}
                    >
                      Cargando...
                    </Typography>
                  )}
                  <div>
                    {res.partidas !== undefined && (
                      <>
                        {res.partidas.map((dato, i) =>
                          resultTablePartidas(dato, i),
                        )}
                      </>
                    )}
                  </div>
                </Container>
                <style jsx>{styles}</style>
              </AppCard>
            </>
          ))}
        </>
      ) : (
        'Error en procesar archivo'
      )}
    </>
  );
};

export default index;
