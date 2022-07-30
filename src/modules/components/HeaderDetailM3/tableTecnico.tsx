import {useState, useEffect} from 'react';
import styles from './styles';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from '@mui/material/IconButton';
import {cargarCampos} from '../ts/mezclarArchivos';

interface Valores {
  nombre: string;
  descripcion: string;
  valor: any;
}

interface Mezcla {
  claveM3: string;
  valores: Array<Valores>;
}

export default function tableTecnico({data}) {
  console.log(data);
  const [datosMezcla, setDatosMezcla] = useState(data);
  const [mezcla, setMezcla] = useState<Mezcla[]>([]);
  useEffect(() => {
    cargarCampos(datosMezcla, setMezcla);
  }, []);
  return (
    <>
      <table id='table-to-xls' className='table-to-xls'>
        <tr>
          {mezcla.length > 0 &&
            mezcla.map((dato, i) => {
              return (
                <>
                  <th colSpan={dato.valores.length}>
                    {dato.claveM3} {dato.claveM3 === '501' && ' Datos'}
                    {dato.claveM3 === '505' && ' Cfdi'}
                    {dato.claveM3 === '800' && ' Efirma'}
                    {dato.claveM3 === '507' && ' Identificadores'}
                    {dato.claveM3 === '510' && ' Contribuciones'}
                    {dato.claveM3 === '509' && ' Tasas'}
                    {dato.claveM3 === '511' && ' Observaciones'}
                    {dato.claveM3 === '500' && ' Inicio'}
                    {dato.claveM3 === '506' && ' Fechas'}
                    {dato.claveM3 === '503' && ' Guias'}
                  </th>
                </>
              );
            })}
        </tr>
        <tr>
          {mezcla.length > 0 &&
            mezcla.map((dato, i) => {
              return (
                <>
                  {dato.valores.map((valores, i) => {
                    console.log(valores);
                    return (
                      <>
                        <td>{valores.descripcion}</td>
                      </>
                    );
                  })}
                </>
              );
            })}
        </tr>
        <tr>
          {mezcla.length > 0 &&
            mezcla.map((dato, i) => {
              return (
                <>
                  {dato.valores.map((valores, i) => {
                    console.log(valores);
                    return (
                      <>
                        <td>{valores.valor}</td>
                      </>
                    );
                  })}
                </>
              );
            })}
        </tr>
      </table>
      <div className='ocultar'>
        <ReactHTMLTableToExcel
          id='test-table-xls-button'
          className='download-table-xls-button'
          table='table-to-xls'
          filename='Tecnico-M3'
          sheet='tablexls'
          buttonText='Tecnico Excel'
        />
      </div>

      <IconButton className='pointer'>
        <label htmlFor='test-table-xls-button' className='downloadIcon pointer'>
          <DownloadIcon
            className='pointer'
            sx={{marginTop: '5px'}}
            color='primary'
          />
        </label>
      </IconButton>
      <style jsx>{styles}</style>
    </>
  );
}
