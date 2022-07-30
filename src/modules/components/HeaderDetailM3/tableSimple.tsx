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

export default function tableSimple({data}) {
  const [datosMezcla, setDatosMezcla] = useState(data);
  const [mezcla, setMezcla] = useState<Mezcla[]>([]);
  useEffect(() => {
    cargarCampos(datosMezcla, setMezcla);
  }, []);
  return (
    <>
      <table id='table-to-xls' className='table-to-xls'>
        <tr>
          <td>VISTA SIMPLIFICADA DEL ARCHIVO M3</td>
        </tr>
        {mezcla.length > 0 &&
          mezcla.map((dato, i) => {
            return (
              <>
                <tr>
                  <td>Tipo de Registro</td>
                  <td>{dato.claveM3}</td>
                </tr>
                {dato.valores.map((valores, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{valores.descripcion}</td>
                        <td>{valores.valor}</td>
                      </tr>
                    </>
                  );
                })}
              </>
            );
          })}
      </table>
      <div className='ocultar'>
        <ReactHTMLTableToExcel
          id='test-table-xls-button'
          className='download-table-xls-button'
          table='table-to-xls'
          filename='Simple-M3'
          sheet='tablexls'
          buttonText='Simple Excel'
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
