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
import {AppCard} from '@crema';
import {archivos, patentes, vistas, aduanas} from './dataInputs';
import VisorResult from '../VisorResultados';
import VisorResultsAuditor from '../VisorResultadosAuditor';
import axios from 'axios';
interface Info {
  title: string;
  typeOption: string;
}
interface AduanaInfo {
  value: string;
  label: string;
}

const Index = (props: Info) => {
  const {title, typeOption} = props;
  const [currency, setCurrency] = useState<Array<string>>([]);
  const [patente, setPatente] = useState('');
  const [vista, setVista] = useState('');
  const [aduana, setAduana] = useState<Array<string>>([]);
  const [data, setData] = useState(null);
  const [visor, setVisor] = useState(false);
  const handleChangeCurrency = (event) => {
    const {value} = event.target;
    setCurrency(typeof value === 'string' ? value.split(',') : value);
  };
  const handleChangePatente = (event) => {
    setPatente(event.target.value);
  };
  const handleChangeVista = (event) => {
    setVista(event.target.value);
  };
  const handleChangeAduana = (event) => {
    setAduana(event.target.value);
  };

  const getArchives = async (e) => {
    e.preventDefault();
    const {data} = await axios.post('/api/aduanaList', {
      aduana: '16',
      fechaDesde: '2020-04-04 12:29:37',
      fechaHasta: '2020-04-04 12:29:37',
    });
    setData(data);
  };

  return (
    <>
      <Title title={title} />
      <AppCard>
        <Box sx={{padding: '10px 0 20px 0'}}>
          <form onSubmit={getArchives}>
            <Grid container spacing={10} rowSpacing={15}>
              <Grid item xs={12} md={4}>
                <InputLabel id='demo-simple-select-standard-label'>
                  Buscar por
                </InputLabel>
                <Select
                  sx={{width: '100%'}}
                  labelId='demo-simple-select-standard-label'
                  multiple
                  value={currency}
                  onChange={handleChangeCurrency}
                  renderValue={(selected) => selected.join(', ')}
                  variant='standard'
                >
                  {archivos.map((option) => (
                    <MenuItem key={option} value={option}>
                      <Checkbox checked={currency.indexOf(option) > -1} />
                      <ListItemText primary={option} />
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  sx={{width: '100%'}}
                  placeholder='Buscar'
                  onChange={handleChangeCurrency}
                  label='Escribe tu busqueda'
                  SelectProps={{
                    native: true,
                  }}
                  variant='standard'
                ></TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  sx={{width: '100%'}}
                  select
                  label='Patente'
                  value={patente}
                  onChange={handleChangePatente}
                  SelectProps={{
                    native: true,
                  }}
                  variant='standard'
                >
                  {patentes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  sx={{width: '100%'}}
                  select
                  label='Vistas'
                  value={vista}
                  onChange={handleChangeVista}
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
                <InputLabel id='demo-simple-select-standard-label-aduana'>
                  Aduana
                </InputLabel>
                <Select
                  sx={{width: '100%'}}
                  labelId='demo-simple-select-standard-label-aduana'
                  multiple
                  value={aduana}
                  onChange={handleChangeAduana}
                  renderValue={(selected) => selected.join(', ')}
                  variant='standard'
                >
                  {aduanas.map((option: AduanaInfo) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Checkbox checked={aduana.indexOf(option.value) > -1} />
                      <ListItemText primary={option.label} />
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  sx={{width: '100%'}}
                  type='date'
                  label='Fecha Inicial'
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  variant='standard'
                ></TextField>
              </Grid>
              <Grid item xs={12} md={4}></Grid>
              <div>
                <Button type='submit' sx={{width: '10%'}} variant='contained'>
                  Boton
                </Button>
              </div>
            </Grid>
          </form>
        </Box>
      </AppCard>
      {typeOption === 'true' && data !== null && <VisorResult data={data} />}
      {typeOption === 'false' && data !== null && (
        <VisorResultsAuditor data={data} />
      )}
      <style jsx>{styles}</style>
    </>
  );
};

export default Index;
