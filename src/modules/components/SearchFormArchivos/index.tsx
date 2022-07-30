import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './styles';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Title from '../TitleMain';
import {AppCard} from '../../../@crema';
import {archivos, vistas} from './dataInputs';
import VisorResult from '../VisorResultados';
import VisorResultsAuditor from '../VisorResultadosAuditor';
import VisorResultsJustificacion from '../VisorResultsJustificacion';
import axios from 'axios';
//INTERFACES IMPORT
import {IInfoListaAP} from '../../../models/IInfoListaAP';
import {IAduana} from '../../../models/IAduana';
import {IPatente} from '../../../models/IPatente';

import {
  handleChange,
  handleChangeList,
  handleChangeDate,
} from '../ts/FormSearch';

const Index = (props: IInfoListaAP) => {
  let date = new Date();
  let hourActual = date.toISOString().split('T')[0];
  const {title, typeComponent, aduana, patente, api} = props;
  const [currency, setCurrency] = useState<Array<string>>([]);
  const [patenteSpace, setPatente] = useState([patente[0].patente]);
  const [aduanaSpace, setAduana] = useState([0]);
  const [vista, setVista] = useState('');
  const [aduanaList, setAduanaList] = useState<Array<IAduana>>(aduana);
  const [patenteList, setPatenteList] = useState<Array<IPatente>>(patente);
  const [data, setData] = useState<{
    pedimento:string,
    patente: number,
    aduana:number,
    fecha:string,
    estatus: string,
    idJustificacion: number
  }>(null);
  const [sendData, setSendData] = useState<{
    aduana:Array<number>
    fechaDesde: string
    fechaHasta:string
    filtrarPor:string
    vista: string
    pedimento:number
  } | {}>({
    aduana: [0],
    fechaDesde: hourActual,
    fechaHasta: hourActual,
    filtrarPor: 'archivo',
    vista: 'Vista 1',
    pedimento: 0
  });

  const changeData = (name, value) => {
    setSendData({...sendData, [name]: value});
  };

  const getArchives = async (e) => {
    e.preventDefault();
    if(sendData.vista === 'Vista 2'){
      console.log("Vista dos")
      console.log(sendData);
      const {data} = await axios.get("https://ozib7lr4z1.execute-api.us-east-1.amazonaws.com/api/api/archivo/14352");
      console.log(data.datos[0].resultado.pedimentos[0].id);
      const justificacion = await axios.get("https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/2000022")
      console.log(justificacion.data)
      setData({
        pedimento:data.datos[0].resultado.pedimentos[0].id,
        patente:data.archivo.patente,
        aduana: data.archivo.aduana,
        fecha: justificacion.data.fechaCreacion,
        estatus:justificacion.data.status.descripcion,
        idJustificacion: justificacion.data.id,
      });
    }
    if(sendData.vista === 'Vista 1'){
      console.log("Vista uno")
      console.log(sendData);
      const {data} = await axios.post(api, sendData);
      console.log(data);
      setData(data);
    }
  
  };

  return (
    <>
      <Title title={title} />
      <AppCard>
        <Box sx={{padding: '10px 0 20px 0'}}>
          <form onSubmit={getArchives}>
            <Grid container spacing={10} rowSpacing={15}>
              <Grid item xs={12} md={4}>
                <TextField
                  name='buscarPor'
                  sx={{width: '100%'}}
                  select
                  label='Buscar por'
                  value={currency}
                  onChange={(e) => {
                    handleChange(e, setCurrency, setSendData, sendData);
                  }}
                  SelectProps={{
                    native: true,
                  }}
                  variant='standard'
                >
                  {archivos.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  sx={{width: '100%'}}
                  placeholder='Buscar'
                  onChange={(e) => {
                    handleChange(e, setCurrency, setSendData, sendData);
                  }}
                  label='Escribe tu busqueda'
                  name='search'
                  SelectProps={{
                    native: true,
                  }}
                  variant='standard'
                ></TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel id='patente-id'>Patente</InputLabel>
                <Select
                  sx={{width: '100%'}}
                  labelId='patente-id'
                  name='patente'
                  value={patenteSpace}
                  multiple
                  onChange={(e) => {
                    handleChange(e, setPatente, setSendData, sendData);
                  }}
                  variant='standard'
                  id='patenteT'
                >
                  <MenuItem
                    value={0}
                    onClick={() => {
                      setPatente([0]);
                      console.log(patenteSpace);
                    }}
                  >
                    {/* <Checkbox checked={aduanaList.indexOf(aduanaList) > -1} /> */}
                    Todas
                  </MenuItem>
                  {patenteList.map((option, i) => {
                    if (option.patente !== 0) {
                      return (
                        <MenuItem key={i} value={option.patente}>
                          {/* <Checkbox checked={aduanaList.indexOf(aduanaList) > -1} /> */}
                          {option.patente}
                        </MenuItem>
                      );
                    }
                  })}
                </Select>
              </Grid>
              <Grid item xs={12} md={4}>
                <InputLabel id='demo-simple-select-standard-label-aduana'>
                  Aduana
                </InputLabel>
                <Select
                  sx={{width: '100%'}}
                  labelId='demo-simple-select-standard-label-aduana'
                  multiple
                  name='aduana'
                  value={aduanaSpace}
                  onChange={(e) => {
                    handleChange(e, setAduana, setSendData, sendData);
                  }}
                  variant='standard'
                  id='aduanaT'
                >
                  <MenuItem value={0}>
                    {/* <Checkbox checked={aduanaList.indexOf(aduanaList) > -1} /> */}
                    Todas
                  </MenuItem>
                  {aduanaList.map((option: IAduana, i) => (
                    <MenuItem key={i} value={option.aduana}>
                      {/* <Checkbox checked={aduanaList.indexOf(aduanaList) > -1} /> */}
                      {option.aduana}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  sx={{width: '100%'}}
                  select
                  label='Vistas'
                  value={vista}
                  name='vista'
                  onChange={(e) => {
                    handleChangeList(e, setVista, setSendData, sendData);
                  }}
                  SelectProps={{
                    native: true,
                  }}
                  variant='standard'
                >
                  {vistas.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  sx={{width: '100%'}}
                  type='date'
                  label='Fecha Inicial'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='fechaDesde'
                  onChange={(e) => {
                    handleChangeDate(e, setSendData, sendData);
                  }}
                  defaultValue={hourActual}
                  variant='standard'
                ></TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  sx={{width: '100%'}}
                  type='date'
                  label='Fecha final'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='fechaHasta'
                  onChange={(e) => {
                    handleChangeDate(e, setSendData, sendData);
                  }}
                  defaultValue={hourActual}
                  variant='standard'
                ></TextField>
              </Grid>
              <Grid item xs={12} md={4}></Grid>
              <div>
                <Button type='submit' sx={{width: '10%'}} variant='contained'>
                  Buscar
                </Button>
              </div>
            </Grid>
          </form>
        </Box>
      </AppCard>
      {typeComponent === 'archivo' &&
        data !== null &&
        sendData.vista === 'Vista 1' && <VisorResult data={data} />}
      {typeComponent === 'auditor' && data !== null && (
        <VisorResultsAuditor data={data} />
      )}
      {sendData.vista === 'Vista 2' && data !== null && (
        <VisorResultsJustificacion data={data} />
      )}
      <style jsx>{styles}</style>
    </>
  );
};

export default Index;
