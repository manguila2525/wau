import {useState} from 'react';

import TableSimple from './tableSimple';
import TableTecnico from './tableTecnico';
import styles from './styles';
const index = ({data}) => {
  const [excel, setExcel] = useState('simple');

  const selectExcel = () => {
    if (excel === 'simple') {
      return <TableSimple data={data} />;
    }
    if (excel === 'tecnico') {
      return <TableTecnico data={data} />;
    }
  };

  const handleInputExcel = (e) => {
    console.log(e.target.value);
    setExcel(e.target.value);
  };

  return (
    <>
      <div className='headerDetail'>
        <h2>VISTA SIMPLIFICADA DEL ARCHIVO M3</h2>
        <div className='flex'>
          {selectExcel()}
          <input
            onClick={handleInputExcel}
            type='radio'
            name='excel'
            id='simple'
            value='simple'
            hidden
          />
          <label
            htmlFor='simple'
            className={`btn-excel-left ${
              excel === 'simple' ? 'btn-primary' : 'btn-empty'
            }`}
          >
            Simple
          </label>
          <input
            onClick={handleInputExcel}
            type='radio'
            name='excel'
            id='tecnico'
            value='tecnico'
            hidden
          />
          <label
            htmlFor='tecnico'
            className={`btn-excel-right ${
              excel === 'tecnico' ? 'btn-primary' : 'btn-empty'
            }`}
          >
            Tecnico
          </label>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default index;
