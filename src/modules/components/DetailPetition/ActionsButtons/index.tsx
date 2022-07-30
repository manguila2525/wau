import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styles from './styles';
import {useIntl} from 'react-intl';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 700,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 8,
};

const LinearProgressWithLabel = (
  props: LinearProgressProps & {value: number},
) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', mt: 3}}>
      <Box sx={{width: '100%'}}>
        <LinearProgress variant='determinate' {...props} sx={{height: 20}} />
      </Box>
      <Box sx={{minWidth: 35}}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
};
const index = () => {
  const {messages} = useIntl();
  const [open, setOpen] = React.useState(false);
  const [infoModal, setInfoModal] = useState<{
    listaDocumentos: Array<{
      id: 0;
      archivo: '';
      rutaArchivo: '';
      tamano: 0;
      descripcion: '';
    }>;
    informacionServidor: {
      espacioLimite: number;
      tamanoActual: number;
    };
  }>({
    listaDocumentos: [],
    informacionServidor: {
      espacioLimite: 0,
      tamanoActual: 0,
    },
  });
  const handleOpen = async () => {
    const {data} = await axios.get(
      'https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/pedimento/1/servidor',
    );
    console.log(data);
    setProgress(
      Number(((data.tamanoActual * 100) / data.espacioLimite).toFixed(2)),
    );
    const listaDocumentos = await axios.get(
      'https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/pedimento/1/documentos',
    );
    console.log(listaDocumentos.data);
    setInfoModal({
      listaDocumentos: listaDocumentos.data,
      informacionServidor: {
        espacioLimite: data.espacioLimite,
        tamanoActual: data.tamanoActual,
      },
    });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <Grid
          container
          direction='row'
          spacing={2}
          justifyContent='space-evenly'
          sx={{padding: ''}}
        >
          <Grid item xs={2}>
            <ul>
              <li>
                <Button sx={{width: '100%'}} variant='contained'>
                  {messages['detailPetition.actionsButtons.pedimento']}
                </Button>
                <ol>
                  <li>
                    <ul>
                      <li>
                        <Button sx={{width: '100%'}} variant='contained'>
                          Simplificado
                        </Button>
                      </li>
                      <li>
                        <Button sx={{width: '100%'}} variant='contained'>
                          Normal
                        </Button>
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{width: '100%'}} variant='contained'>
              {messages['detailPetition.actionsButtons.archivo']}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              sx={{width: '100%'}}
              variant='contained'
              onClick={handleOpen}
            >
              {messages['detailPetition.actionsButtons.documentos']}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{width: '100%'}} variant='contained'>
              {messages['detailPetition.actionsButtons.soia']}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button disabled sx={{width: '100%'}} variant='contained'>
              {messages['detailPetition.actionsButtons.notas']}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-description'
            sx={{mt: 2, mb: 5}}
            variant='h1'
            component='h1'
          >
            Informacion General del documento
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{mt: 3, mb: 3}}
            variant='h2'
            component='h2'
            color='primary'
          >
            Espacio del servidor
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography
              id='modal-modal-title'
              variant='h3'
              color='GrayText'
              component='h3'
              sx={{textAlign: 'start'}}
            >
              {infoModal.informacionServidor.tamanoActual}
            </Typography>
            <Typography
              id='modal-modal-title'
              variant='h3'
              color='GrayText'
              component='h3'
              sx={{textAlign: 'center'}}
            >
              /
            </Typography>
            <Typography
              id='modal-modal-title'
              variant='h3'
              color='GrayText'
              component='h3'
              sx={{textAlign: 'end', pr: 10}}
            >
              {infoModal.informacionServidor.espacioLimite} Bytes
            </Typography>
          </Box>
          <Box sx={{mb: 5}}>
            <LinearProgressWithLabel value={progress} />
          </Box>
          <Typography
            id='modal-modal-description'
            sx={{mt: 3, mb: 5}}
            variant='h2'
            component='h2'
            color='primary'
          >
            Documentos de pedimento
          </Typography>
          {infoModal.listaDocumentos.map((documento) => (
            <Box key={documento.id} sx={{px: 15}}>
              <Grid
                container
                spacing={2}
                sx={{px: 30, border: 'solid 1px #ccc', py: 5}}
              >
                <Grid
                  item
                  xs={12}
                  sx={{display: 'flex', justifyContent: 'space-between'}}
                >
                  <Typography component='h2' variant='h2' color='primary'>
                    Archivo:
                  </Typography>
                  <Typography component='h3' variant='h3'>
                    {documento.archivo}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{display: 'flex', justifyContent: 'space-between'}}
                >
                  <Typography component='h2' variant='h2' color='primary'>
                    Ruta de Archivo:
                  </Typography>
                  <Typography component='h3' variant='h3'>
                    {documento.rutaArchivo}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{display: 'flex', justifyContent: 'space-between'}}
                >
                  <Typography component='h2' variant='h2' color='primary'>
                    Tamano:
                  </Typography>
                  <Typography component='h3' variant='h3'>
                    {documento.tamano}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{display: 'flex', justifyContent: 'space-between'}}
                >
                  <Typography component='h2' variant='h2' color='primary'>
                    Descripcion:
                  </Typography>
                  <Typography component='h3' variant='h3'>
                    {documento.descripcion}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Box sx={{position: 'absolute', bottom: 5, right: 5}}>
            <Button
              variant='contained'
              color='secondary'
              sx={{mr: 2}}
              onClick={handleClose}
            >
              Cerrar
            </Button>
            <Button variant='contained'>Generar</Button>
          </Box>
        </Box>
      </Modal>
      <style jsx>{styles}</style>
    </>
  );
};

export default index;
