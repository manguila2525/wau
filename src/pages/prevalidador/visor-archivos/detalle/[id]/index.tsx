import React from 'react';
import AppPage from '../../../../../@crema/hoc/AppPage';
import {visorArchivoDetalle} from '../../../../../utils/getServerSideProps/visorArchivoDetalle';
import SimpleDetailArchive from '../../../../../modules/components/SimpleDetailArchive';
export default AppPage(({dataPedimentos}) => (
  <>
    <SimpleDetailArchive dataPedimentos={dataPedimentos} />
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
