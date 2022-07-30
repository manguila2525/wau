import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {AppCard} from '../../../@crema';
import styles from './styles';
import Title from '../TitleMain';
import Link from 'next/link';
import {useIntl} from 'react-intl';
import TableM3 from './TableM3';
import TablePagoElectronico from './TablePagoElectronico';
import TableSagarpa from './TableSagarpa';
import TableEncargoConferido from './TableEncargoConferido';
import TableCartasCupo from './TableCartasCupo';
import TableAvisoElectronico from './TableAvisoElectronico';

import {IPedimento} from '../../../models/IPedimento';
interface IData {
  data: Array<IPedimento>;
}

const Index = (props: IData) => {
  const {data} = props;
  console.log(data);
  const {messages} = useIntl();

  return (
    <Box sx={{marginTop: '20px'}}>
      <Title title='Visualizar respuesta' />
      <AppCard>
        <TableContainer>
          <TableM3 data={data} />
          <TablePagoElectronico data={data} />
          <TableSagarpa data={data} />
          <TableEncargoConferido data={data} />
          <TableCartasCupo data={data} />
          <TableAvisoElectronico data={data} />
        </TableContainer>
      </AppCard>
      <style jsx>{styles}</style>
    </Box>
  );
};

export default Index;
