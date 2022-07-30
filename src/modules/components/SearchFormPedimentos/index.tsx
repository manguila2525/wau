import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './styles';
import Button from '@mui/material/Button';
import Title from '../TitleMain';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {AppCard} from '../../../@crema';
import {archivos, vistas} from './dataInputs';
import PetitionResults from '../PetitionResults';
import PedimentosResultados from '../PetitionResultSimple';
import PedimentoResultTecnico from '../PedimentoResultTecnico';
import axios from 'axios';
//INTERFACE IMPORT
import {IInfoListaAP} from '../../../models/IInfoListaAP';
import {IAduana} from '../../../models/IAduana';
import {IPatente} from '../../../models/IPatente';

import {
  handleChange,
  handleChangeList,
  handleChangeDate,
  handleChangeVistaPedimento,
} from '../ts/FormSearch';
const Index = (props: IInfoListaAP) => {
  const [visor, setVisor] = useState('Simplificada');
  const [data, setData] = useState(null);
  let date = new Date();
  let hourActual = date.toISOString().split('T')[0];
  const {title, typeOption, aduana, patente} = props;
  const [currency, setCurrency] = useState('');
  const [aduanaList, setAduanaList] = useState<Array<IAduana>>(aduana);
  const [patenteList, setPatenteList] = useState<Array<IPatente>>(patente);
  const [patenteSpace, setPatente] = useState([patente[0].patente]);
  const [aduanaSpace, setAduana] = useState([0]);
  const [vista, setVista] = useState('');
  const [sendData, setSendData] = useState({
    aduana: 0,
    filtrarPor: 'pedimento',
    fechaDesde: hourActual,
    fechaHasta: hourActual,
    valorFiltro: '1004977',
    patente: '0',
    search: '',
    vista: 'Simplificada',
  });

  // const handleSearch = () => {
  //   console.log('algo');
  // };
  // const handleChangeDate = (event) => {
  //   const {value, name} = event.target;
  //   changeData(name, value);
  // };
  // const changeData = (name, value) => {
  //   setSendData({...sendData, [name]: value});
  // };
  // const handleChangeCurrency = (event) => {
  //   setCurrency(event.target.value);
  // };
  // const handleChangePatente = (event) => {
  //   setPatente(event.target.value);
  // };
  // const handleChangeVista = (event) => {
  //   setVista(event.target.value);
  //   console.log(event.target.value);
  //   if (event.target.value === 'Simplificada') {
  //     setVisor('Simplificada');
  //   }
  //   if (event.target.value === 'Por Cliente') {
  //     setVisor('Por Cliente');
  //   }
  //   if (event.target.value === 'Técnico') {
  //     setVisor('Técnico');
  //   }
  // };
  // const handleChangeAduana = (event) => {
  //   setAduana(event.target.value);
  // };
  const getArchives = async (e) => {
    e.preventDefault();
    console.log(sendData);
    const {data} = await axios.post('/api/getListPetitions', sendData);
    setData(data);
  };
  const handleVisor = () => {
    if (visor == 'Por Cliente' && data !== null) {
      return <PetitionResults data={data} />;
    }
    if (visor == 'Simplificada' && data !== null) {
      return <PedimentosResultados data={data} />;
    }
    if (visor == 'Técnico' && data !== null) {
      return <PedimentoResultTecnico data={data} />;
    }
    // if(){
    //   return <PedimentoResultTecnico data={data}/>
    // }
  };
  return (
    <>
      <Title title='Visor de Pedimientos' />
      <AppCard>
        <Box sx={{padding: '10px 0 20px 0'}}>
          <form onSubmit={getArchives}>
            <Grid container spacing={10} rowSpacing={15}>
              <Grid item xs={12} md={4}>
                <TextField
                  name='filtrarPor'
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
                  {archivos.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  sx={{width: '100%'}}
                  placeholder='Buscar'
                  // onChange={(e) => {
                  //   handleChange(e, setCurrency, setSendData, sendData);
                  // }}
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
                    handleChangeVistaPedimento(
                      e,
                      setVista,
                      setVisor,
                      setSendData,
                      sendData,
                    );
                  }}
                  SelectProps={{
                    native: true,
                  }}
                  variant='standard'
                >
                  {vistas.map((option) => (
                    <option key={option.value} value={option.value}>
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

      {/* TABLES DATA */}
      {handleVisor()}

      <style jsx>{styles}</style>
    </>
  );
};

export default Index;
