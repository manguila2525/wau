import {useState} from 'react';
import InformationGeneral from './InformationGeneral';
import TableIncrement from './TableIncrement';
import TableDecrement from './TableDecrement';
import TableIdent from './TableIdent';
import ActionsBtn from './ActionsButtons';
import {AppCard} from '@crema';
const index = ({data}) => {
  const [informacionGlobal, setInformacionGlobal] = useState(data);
  console.log(informacionGlobal);
  return (
    <>
      <AppCard>
        <InformationGeneral data={informacionGlobal} />
        {/* <TableIncrement title='Incrementables' data={data} />
        <TableDecrement data={data} />
        <TableIdent data={data} /> */}
        <ActionsBtn />
      </AppCard>
    </>
  );
};

export default index;
