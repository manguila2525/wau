import React from 'react';
import axios from 'axios';
import AppPage from '../../../../@crema/hoc/AppPage';

import DetailAuditor from '../../../../modules/components/DetailAuditor';
import {visorAuditorDetalle} from '../../../../utils/getServerSideProps/visorAuditorDetalle';

export default AppPage(({data}) => (
  <>
    <DetailAuditor data={data} />
  </>
));

export const getServerSideProps = async (context) => {
  try {
    const {id} = context.query;
    return visorAuditorDetalle(id);
  } catch (error) {
    console.log(error);
  }
};
