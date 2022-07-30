import React from 'react';
import axios from 'axios';
import AppPage from '../../../../@crema/hoc/AppPage';

import DetailPetition from '../../../../modules/components/DetailPetition';
import DetailOption from '../../../../modules/components/DetailOptionArchive/index';
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
