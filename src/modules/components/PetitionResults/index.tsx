import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {AppCard} from '../../../@crema';
import Title from '../TitleMain';
import Link from 'next/link';
import {useIntl} from 'react-intl';

export default function index({data}) {
  console.log(data);
  const {messages} = useIntl();
  return (
    <Box sx={{marginTop: '20px'}}>
      <Title title='Visualizar respuesta' />
      <AppCard>
        <TableContainer>
          <Table sx={{minWidth: 650}} aria-label='simple table'>
            {data.map((row) => (
              <>
                <TableHead>
                  <TableCell align='center' colSpan={12}>
                    AEA9111014S3 - Arneses Electricos Automotrices, S.A De C.V
                  </TableCell>
                  <TableRow>
                    <TableCell>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.pedimento'
                        ]
                      }
                    </TableCell>

                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.estatus'
                        ]
                      }
                    </TableCell>

                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.tipoDePago'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.tipoDeOperacion'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.cvDocumento'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.aduSec'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.valorAduana'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.impuestoEfectivo'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.impuestoNoEfectivo'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.fechaEntrada'
                        ]
                      }
                    </TableCell>
                    <TableCell align='center'>
                      {
                        messages[
                          'visorPedimentos.visualizarRespuesta.pedimentos.fechaPago'
                        ]
                      }
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key={row.pedimento}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  >
                    <TableCell component='th' scope='row'>
                      <Link href={`/prevalidador/visor-pedimentos/1000998`}>
                        <a>{row.pedimento}</a>
                      </Link>
                    </TableCell>
                    <TableCell align='center'>{row.status}</TableCell>
                    <TableCell align='center'>{row.tipoOperacion}</TableCell>
                    <TableCell align='center'>{row.tipoOperacion}</TableCell>
                    <TableCell align='center'>{row.claveDocumento}</TableCell>
                    <TableCell align='center'>{row.aduana}</TableCell>
                    <TableCell align='center'>{row.aduana}</TableCell>
                    <TableCell align='center'>{row.impuestoEfectivo}</TableCell>
                    <TableCell align='center'>
                      {row.impuestoNoEfectivo}
                    </TableCell>
                    <TableCell align='center'>{row.fechaEntPre}</TableCell>
                    <TableCell align='center'>{row.fechaPago}</TableCell>
                  </TableRow>
                </TableBody>
              </>
            ))}

            {/* <TableHead>
              <TableCell align='center' colSpan={12}>
                BMA0101116N3 - Blancos y Maquillas SA De CV
              </TableCell>
              <TableRow>
                <TableCell>Pedimento</TableCell>
                <TableCell align='center'>Estatus</TableCell>
                <TableCell align='center'>Tipo de Pago</TableCell>
                <TableCell align='center'>Tipo Opera.</TableCell>
                <TableCell align='center'>CV Document.</TableCell>
                <TableCell align='center'>Adu Sec.</TableCell>
                <TableCell align='center'>Valor Aduana/Comercial</TableCell>
                <TableCell align='center'>Impuesto Efectivo</TableCell>
                <TableCell align='center'>Impuesto no Efectivo</TableCell>
                <TableCell align='center'>Fecha Entrada/Presenta.</TableCell>
                <TableCell align='center'>Fecha Pago</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component='th' scope='row'>
                    <Link href='/prevalidador/visor-pedimentos/123'>
                      <a>{row.name}</a>
                    </Link>
                  </TableCell>
                  <TableCell align='center'>{row.calories}</TableCell>
                  <TableCell align='center'>{row.fat}</TableCell>
                  <TableCell align='center'>{row.carbs}</TableCell>
                  <TableCell align='center'>{row.protein}</TableCell>
                  <TableCell align='center'>{row.seis}</TableCell>
                  <TableCell align='center'>{row.siete}</TableCell>
                  <TableCell align='center'>{row.ocho}</TableCell>
                  <TableCell align='center'>{row.nueve}</TableCell>
                  <TableCell align='center'>{row.diez}</TableCell>
                  <TableCell align='center'>{row.once}</TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableHead>
              <TableCell align='center' colSpan={12}>
                BME820511SU5 - Bayer de Mexico SA De CV
              </TableCell>
              <TableRow>
                <TableCell>Pedimento</TableCell>
                <TableCell align='center'>Estatus</TableCell>
                <TableCell align='center'>Tipo de Pago</TableCell>
                <TableCell align='center'>Tipo Opera.</TableCell>
                <TableCell align='center'>CV Document.</TableCell>
                <TableCell align='center'>Adu Sec.</TableCell>
                <TableCell align='center'>Valor Aduana/Comercial</TableCell>
                <TableCell align='center'>Impuesto Efectivo</TableCell>
                <TableCell align='center'>Impuesto no Efectivo</TableCell>
                <TableCell align='center'>Fecha Entrada/Presenta.</TableCell>
                <TableCell align='center'>Fecha Pago</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows3.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component='th' scope='row'>
                    <Link href='/prevalidador/visor-pedimentos/123'>
                      <a>{row.name}</a>
                    </Link>
                  </TableCell>
                  <TableCell align='center'>{row.calories}</TableCell>
                  <TableCell align='center'>{row.fat}</TableCell>
                  <TableCell align='center'>{row.carbs}</TableCell>
                  <TableCell align='center'>{row.protein}</TableCell>
                  <TableCell align='center'>{row.seis}</TableCell>
                  <TableCell align='center'>{row.siete}</TableCell>
                  <TableCell align='center'>{row.ocho}</TableCell>
                  <TableCell align='center'>{row.nueve}</TableCell>
                  <TableCell align='center'>{row.diez}</TableCell>
                  <TableCell align='center'>{row.once}</TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
      </AppCard>
    </Box>
  );
}
