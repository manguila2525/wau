import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import SearchForm from '../../../modules/components/SearchFormPedimentos';
import {aduanaLista} from '../../../utils/getServerSideProps/aduanaLista';
import {patenteLista} from '../../../utils/getServerSideProps/patenteLista';

export default AppPage(({aduana, patente}) => (
  <>
    <SearchForm aduana={aduana} patente={patente} title='' typeOption='' />
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
