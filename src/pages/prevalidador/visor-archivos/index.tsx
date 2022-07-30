import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import SearchForm from '../../../modules/components/SearchFormArchivos/index';
import {aduanaLista} from '../../../utils/getServerSideProps/aduanaLista';
import {patenteLista} from '../../../utils/getServerSideProps/patenteLista';

export default AppPage(({aduana, patente}) => (
  <>
    <SearchForm
      title='Visor de Archivos Prevalidados/Validados'
      typeComponent='archivo'
      aduana={aduana}
      patente={patente}
      api='/api/getListArchives'
    />
  </>
));

export const getServerSideProps = async () => {
  try {
    const aduana = await aduanaLista();
    const patente = await patenteLista();
    return {
      props: {
        aduana,
        patente,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
