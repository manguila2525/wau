import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {convertirAlertas} from './convertirAlertas';
import {useState} from 'react';
const svg = `
Sistema Automatizado de Revisión Aduanera (SIARA)	Fecha: 16/05/2022	18:05:25
PEDIMENTO : 2010716
Tipo	Registro		Campo	Línea	Descripción
Alerta     	Facturas         	05	7	El INCOTERM: 'CFR' es posible requiera la declaración de seguro(s), favor de verificar su correcta aplicación.

Alerta     	Observs. Partida 	06	0	El campo 'Observaciones' no permite la declaración de comillas simples o sencillas, acentos, asteriscos y guiones de conformidad con el Manual Técnico, para las partidas: 1

Alerta     	Rectificaciones  	05	2	No se permite rectificar la clave de documento si se tratan de regímenes distintos de conformidad con el Art. 89 de la LA.

Alerta     	Rectificaciones  	06	2	Verifique que la Fecha de Pago del Pedimento Rectificado sea Correcta

Alerta     	Diferencias      	05	26	Las diferencias de las contribuciones en rectificaciones no están sujetas a prevalidación ya que no se tiene acceso a las contribuciones del pedimento original.

Informativo	Inicio Pdtos.    	00	0	La presente asesoría es una opinión de Redes y Consultoría al Comercio Exterior, S.A. de C.V. y puede ser contraria a la interpretación de las Autoridades Fiscales, de conformidad con el Art. 89 del CFF.

RESUMEN DE PREVALIdación
Total de Pedimentos Incorrectos		         0
Total de Pedimentos Correctos		         1
Total de Pedimentos		         1

EOF

`;
const index = ({erroresM3}) => {
  const [alertas, setAlertas] = useState(convertirAlertas(svg));
  const countAlertas = alertas.filter((alerta) => alerta.tipo === 'Alerta');
  const countInformativo = alertas.filter(
    (alerta) => alerta.tipo === 'Informativo',
  );
  console.log(erroresM3);
  console.log(alertas);
  return (
    <>
      <Box sx={{margin: '30px 0'}}>
        <Typography
          variant='h5'
          align='center'
          component='h4'
          color='primary'
          sx={{marginBottom: 1}}
        >
          Errores y sugerencias del servicio de Prevalidacion de RECO(SPR) -
          Date -
        </Typography>

        <TableContainer>
          <Table sx={{minWidth: 650}} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h5' align='center' component='h5'>
                    Tipo
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Registro
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Campo
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Linea
                  </Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h5' align='center' component='h5'>
                    Descripcion
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {erroresM3.map((text, i) => {
                return (
                  <>
                    <TableRow
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell align='right'>
                        {text.tipo === 1 && (
                          <Typography
                            variant='h5'
                            align='center'
                            sx={{color: '#ffc107'}}
                            component='h5'
                          >
                            Alerta
                          </Typography>
                        )}
                        {text.tipo === 2 && (
                          <Typography
                            variant='h5'
                            align='center'
                            color='primary'
                            component='h5'
                          >
                            Informativo
                          </Typography>
                        )}
                        {text.tipo === 3 && (
                          <Typography
                            variant='h5'
                            align='center'
                            sx={{color: 'red'}}
                            component='h5'
                          >
                            Error
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5' align='center' component='h5'>
                          {text.detalle.tipoRegistro}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5' align='center' component='h5'>
                          {text.detalle.campo}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5' align='center' component='h5'>
                          {text.linea}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5' align='center' component='h5'>
                          {text.detalle.descripcionSiara}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
              {/* {alertas.map((text, i) => {
                return (
                  <>
                    <TableRow
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell align='right'>
                        {text.tipo === 'Alerta' && (
                          <Typography
                            variant='h5'
                            align='center'
                            sx={{color: '#ffc107'}}
                            component='h5'
                          >
                            {text.tipo}
                          </Typography>
                        )}
                        {text.tipo === 'Informativo' && (
                          <Typography
                            variant='h5'
                            align='center'
                            color='primary'
                            component='h5'
                          >
                            {text.tipo}
                          </Typography>
                        )}
                        {text.tipo === 'Error' && (
                          <Typography
                            variant='h5'
                            align='center'
                            sx={{color: 'red'}}
                            component='h5'
                          >
                            {text.tipo}
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5' align='center' component='h5'>
                          {text.registro}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5' align='center' component='h5'>
                          {text.campo}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5' align='center' component='h5'>
                          {text.linea}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5' align='center' component='h5'>
                          {text.descripcion}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default index;
