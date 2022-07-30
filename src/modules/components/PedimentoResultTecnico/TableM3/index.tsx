import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Download from '@mui/icons-material/Download';
import {AppCard} from '@crema';
import Link from 'next/link';
import {useIntl} from 'react-intl';
export const index = ({data}) => {
  const {messages} = useIntl();
  return (
    <div>
      <h3>Pedimentos M3</h3>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              {
                messages[
                  'visorPedimentos.visualizarRespuesta.pedimentos.archivo'
                ]
              }
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.jul']}
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.err']}
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.sv']}
            </TableCell>
            <TableCell align='right'>
              {
                messages[
                  'visorPedimentos.visualizarRespuesta.pedimentos.estatus'
                ]
              }
            </TableCell>
            <TableCell>
              {
                messages[
                  'visorPedimentos.visualizarRespuesta.pedimentos.archivo'
                ]
              }
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.jul']}
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.err']}
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.sv']}
            </TableCell>
            <TableCell align='right'>
              {
                messages[
                  'visorPedimentos.visualizarRespuesta.pedimentos.estatus'
                ]
              }
            </TableCell>
            <TableCell>
              {
                messages[
                  'visorPedimentos.visualizarRespuesta.pedimentos.archivo'
                ]
              }
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.jul']}
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.err']}
            </TableCell>
            <TableCell align='right'>
              {messages['visorPedimentos.visualizarRespuesta.pedimentos.sv']}
            </TableCell>
            <TableCell align='right'>
              {
                messages[
                  'visorPedimentos.visualizarRespuesta.pedimentos.estatus'
                ]
              }
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component='th' scope='row'>
                <Link href='/prevalidador/visor-pedimentos/1000998'>
                  <a>{row.pedimento}</a>
                </Link>
              </TableCell>
              <TableCell align='right'>
                <div className='flex'>
                  <Download fontSize='small' color='primary'></Download>
                </div>
              </TableCell>
              <TableCell align='right'>
                <Download fontSize='small' color='primary'></Download>{' '}
              </TableCell>
              <TableCell align='right'>
                <Download fontSize='small' color='primary'></Download>
              </TableCell>
              <TableCell align='right'>{row.claveDocumento}</TableCell>
              <TableCell align='right'>{row.aduana}</TableCell>
              <TableCell align='right'>
                <Download fontSize='small' color='primary'></Download>
              </TableCell>
              <TableCell align='right'>
                <Download fontSize='small' color='primary'></Download>
              </TableCell>
              <TableCell align='right'>
                <Download fontSize='small' color='primary'></Download>
              </TableCell>
              <TableCell align='right'>{row.idPrevalidador}</TableCell>
              <TableCell align='right'>{row.idPrevalidador}</TableCell>
              <TableCell align='right'>
                <Download fontSize='small' color='primary'></Download>
              </TableCell>
              <TableCell align='right'>
                <Download fontSize='small' color='primary'></Download>
              </TableCell>
              <TableCell align='right'>
                <Download fontSize='small' color='primary'></Download>
              </TableCell>
              <TableCell align='right'>{row.idPrevalidador}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default index;
