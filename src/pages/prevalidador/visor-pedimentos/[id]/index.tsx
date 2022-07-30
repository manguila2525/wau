import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';

import DetailPetition from '../../../../modules/components/DetailPetition';
import DetailOption from '../../../../modules/components/DetailOption/index';
import {visorArchivoDetalle} from '../../../../utils/getServerSideProps/visorArchivoDetalle';

export default AppPage(({dataPedimentos}) => (
  <>
    <DetailPetition data={dataPedimentos} />
    <DetailOption />
  </>
));

export const getServerSideProps = async (context) => {
  try {
    const {id} = context.query;
    return visorArchivoDetalle(id);
  } catch (error) {
    console.log(error);
  }
};
