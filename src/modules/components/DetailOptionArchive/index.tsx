import React, {useState} from 'react';
import {AppCard} from '@crema';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import TableGuides from './TableGuides';
import TableBills from './TableBills';
import TableFractions from './TableFractions';
import TableTaxes from './TableTaxes';
import TableLogistics from './TableLogistics';
import TableDownload from './TableDownload';

const index = () => {
  const [tableInfo, setTableInfo] = useState('GUIDES');

  const handleTableInfo = (data) => {
    setTableInfo(data);
  };

  return (
    <>
      <Box sx={{marginTop: '20px'}}>
        <AppCard>
          <Navbar handleTableInfo={handleTableInfo} />
          {tableInfo === 'GUIDES' && <TableGuides />}
          {tableInfo === 'BILLS' && <TableBills />}
          {tableInfo === 'FRACTIONS' && <TableFractions />}
          {tableInfo === 'TAXES' && <TableTaxes />}
          {tableInfo === 'LOGISTICS' && <TableLogistics />}
          {tableInfo === 'DOWNLOADS' && <TableDownload />}
        </AppCard>
      </Box>
    </>
  );
};

export default index;
