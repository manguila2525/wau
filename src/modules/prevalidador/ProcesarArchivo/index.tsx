import React, {useEffect, useState} from 'react';
import {Box, Button, Grid} from '@mui/material';
import Modal from '@mui/material/Modal';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {AppCard, AppGridContainer, AppList} from '../../../@crema';
import Pageheader from '../../../modules/components/PageHeader';
import {useIntl} from 'react-intl';
import TipoEnvio from './TipoEnvio';
import UploadModern from './UploadModern';
import {useDropzone} from 'react-dropzone';
import FileRow from './FileRow';
import {Typography} from '@mui/material';
import {submitValidation} from './uploadValidation';
interface IFinalData {
  nombre: string;
  contenido: string | ArrayBuffer;
}
interface Api {
  api: {
    url: string;
    procesar: string;
  };
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ProcesarArchivo = (props: Api) => {
  const {api} = props;

  //Modal
  const handleClose = () => {
    setEstadoRevision({
      estadoArchivo: '',
      descEstadoEjecucion: '',
      descEstadoArchivo: '',
      idArchivo: '',
    });
  };
  // Resultado api archivo
  const [resultGet, setResultGet] = useState('');
  const {messages} = useIntl();
  const [stateShow, setStateShow] = useState(false);
  const [fileReaderList, setFileReaderList] = React.useState<any>('');
  const [tipo, setTipo] = React.useState('serie');
  const [contenido, setContenido] = React.useState<any>('');
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = React.useState<any>([]);
  const [finalData, setFinalData] = useState<IFinalData>({
    nombre: '',
    contenido: '',
  });
  const [estadoRevision, setEstadoRevision] = useState({
    estadoArchivo: '',
    descEstadoEjecucion: '',
    descEstadoArchivo: '',
    idArchivo: '',
  });

  useEffect(() => {
    setUploadedFiles(dropzone.acceptedFiles);
  }, [dropzone.acceptedFiles]);

  useEffect(() => {
    setFinalData({...finalData, contenido});
  }, [contenido]);
  // useEffect(() => {
  //   if (resultGet !== '') {
  //     alert(resultGet);
  //   }
  // }, [resultGet]);

  useEffect(() => {
    setFinalData({...finalData, nombre: fileReaderList});
  }, [fileReaderList]);

  useEffect(() => {
    console.log(estadoRevision);
  }, [estadoRevision]);

  const onDeleteUploadFile = (file: any) => {
    dropzone.acceptedFiles.splice(dropzone.acceptedFiles.indexOf(file), 1);
    setUploadedFiles([...dropzone.acceptedFiles]);
  };

  return (
    <>
      {api.procesar === 'archivo' ? (
        <Pageheader messageId={'prevalidador.procesarArchivos.titulo'} />
      ) : (
        <Pageheader messageId={'prevalidador.procesarAuditor.titulo'} />
      )}
      <AppGridContainer>
        <Grid item xs={12}>
          <AppCard>
            <form
              onSubmit={(e) => {
                submitValidation(
                  e,
                  uploadedFiles,
                  resultGet,
                  setResultGet,
                  finalData,
                  api,
                  setEstadoRevision,
                );
              }}
            >
              {api.procesar === 'archivo' && (
                <TipoEnvio tipo={tipo} onChange={setTipo} />
              )}
              <Box sx={{position: 'relative', pt: 4}}>
                <UploadModern
                  uploadText={
                    messages['prevalidador.procesarArchivos.archivo.titulo']
                  }
                  dropzone={dropzone}
                />
                <aside>
                  <AppList
                    data={uploadedFiles}
                    renderRow={(file: any, index: number) => {
                      const fileReader = new FileReader();
                      fileReader.readAsText(file);
                      fileReader.onload = () => {
                        setFileReaderList(file.name);
                        setContenido(fileReader.result);
                      };
                      fileReader.onerror = () => {};
                      return (
                        <div>
                          <Grid
                            container
                            key={index}
                            sx={{alignItems: 'center'}}
                          >
                            <Grid item xs={1}>
                              <Button
                                sx={{minWidth: '0px', width: '100%'}}
                                onClick={() => setStateShow(!stateShow)}
                              >
                                {stateShow ? (
                                  <VisibilityOffIcon
                                    sx={{minWidth: '0px'}}
                                    fontSize='large'
                                  ></VisibilityOffIcon>
                                ) : (
                                  <VisibilityIcon
                                    sx={{minWidth: '0px'}}
                                    fontSize='large'
                                  ></VisibilityIcon>
                                )}
                              </Button>
                            </Grid>
                            <Grid item xs={11} sm={11}>
                              <FileRow
                                key={index + file.path}
                                file={file}
                                onDeleteUploadFile={onDeleteUploadFile}
                                state={resultGet}
                                estadoRevision={estadoRevision}
                                handleClose={handleClose}
                              />
                            </Grid>
                          </Grid>
                          {stateShow && (
                            <Box
                              sx={{
                                width: '100%',
                                padding: '0px 40px',
                                height: '200px',
                                overflow: 'auto',
                                marginBottom: '10px',
                              }}
                            >
                              <Typography
                                variant='h5'
                                component='h3'
                                sx={{
                                  color: '#777777',
                                  wordWrap: 'break-word',
                                }}
                              >
                                {contenido}
                              </Typography>
                            </Box>
                          )}
                        </div>
                      );
                    }}
                  />
                </aside>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Button
                  sx={{
                    m: 'auto',
                    position: 'relative',
                    minWidth: 100,
                  }}
                  color='primary'
                  variant='contained'
                  type='submit'
                >
                  <IntlMessages id='prevalidador.procesarArchivos.validar' />
                </Button>
              </Box>
            </form>
          </AppCard>
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default ProcesarArchivo;
