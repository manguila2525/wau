import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from './style';
import {useState, useEffect} from 'react';
import axios from 'axios';

import TablaErrorDescripcion from './TablaErrorDescripcion';
import {AiTwotoneExclamationCircle} from 'react-icons/ai';

interface Documento {
  global: any;
  documentos: any;
  documentoJustificable: number;
  anadirTotal: (valor) => void;
  listarTotal: (valor) => void;
  actualizarEstado: (id, valor) => void;
  actualizarBase: (id, valor) => void;
  actualizarFundamento: (id, valor) => void;
}

const TablaDocumento = (props: Documento) => {
  const {
    global,
    documentos,
    documentoJustificable,
    anadirTotal,
    listarTotal,
    actualizarEstado,
    actualizarBase,
    actualizarFundamento,
  } = props;
  const inputFile = `documento${documentoJustificable}`;
  const inputFileBase = `base${documentoJustificable}`;
  const [documentosJustificablesVista, setDocumentosJustificablesVista] =
    useState({
      id: documentoJustificable,
      cargaAnexos: [],
      baseLegal: [],
      fundamentoLegal: '',
    });
  const [documentosJustificables, setDocumentosJustificables] =
    useState(documentos);
  const [val, setVal] = useState(documentos);

  const anadirAnexo = async (e, detalle) => {
    const f = new FormData();
    f.append('archivo', e.target.files[0]);
    console.log(f);
    await axios.post(
      `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/${global.idPedimento}/detalle/${detalle}/documento/1`,
      f,
    );
    setDocumentosJustificables({
      ...documentosJustificables,
      documentos: [
        ...documentosJustificables.documentos,
        {
          nombre: e.target.files[0].name,
          tipo: 1,
        },
      ],
    });
  };

  const anadirBase = async (e, detalle) => {
    const f = new FormData();
    f.append('archivo', e.target.files[0]);
    console.log(f);
    await axios.post(
      `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/${global.idPedimento}/detalle/${detalle}/documento/2`,
      f,
    );
    setDocumentosJustificables({
      ...documentosJustificables,
      documentos: [
        ...documentosJustificables.documentos,
        {
          nombre: e.target.files[0].name,
          tipo: 2,
        },
      ],
    });
  };

  const eliminarAnexo = async (e, id, documento, detalle) => {
    e.preventDefault();
    console.log(id);
    console.log(detalle);
    console.log(documento);
    await axios.delete(
      `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/${global.idPedimento}/detalle/${documento}/documento/${detalle}`,
    );
    const anexo = documentosJustificables.documentos.filter(
      (documento) => documento.nombre !== id,
    );
    console.log(anexo);
    actualizarEstado(documentoJustificable, anexo);
    setDocumentosJustificables({
      ...documentosJustificables,
      documentos: anexo,
    });
  };

  const eliminarBase = async (e, id, documento, detalle) => {
    e.preventDefault();
    console.log(id);
    console.log(detalle);
    console.log(documento);
    await axios.delete(
      `https://smb3ehffpl.execute-api.us-east-1.amazonaws.com/development/justificacion/${global.idPedimento}/detalle/${documento}/documento/${detalle}`,
    );
    const base = documentosJustificables.documentos.filter(
      (documento) => documento.nombre !== id,
    );
    actualizarBase(documentoJustificable, base);
    setDocumentosJustificables({
      ...documentosJustificables,
      documentos: base,
    });
  };

  const handleAnexo = (e, detalle) => {
    anadirAnexo(e, detalle);
  };

  useEffect(() => {
    listarTotal(documentosJustificables);
    console.log(documentosJustificables);
  }, []);

  return (
    <>
      <TablaErrorDescripcion error={documentos} />
      <Grid xs={12}>
        <Typography variant='h5' align='center' component='h5'>
          Documentos para acreditar la justificacion
        </Typography>
      </Grid>
      <TableContainer sx={{padding: '0 20px', margin: '5px 0'}}>
        <Table size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant='h5'
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  align='center'
                  component='h5'
                >
                  Carga de Anexos
                  <input
                    type='file'
                    id={inputFile}
                    onChange={(e) => handleAnexo(e, documentosJustificables.id)}
                  />
                  <label htmlFor={inputFile}>
                    <AddBoxOutlinedIcon color='primary' />
                  </label>
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography
                  variant='h5'
                  align='center'
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  component='h5'
                >
                  Base Legal*
                  <input
                    name='archivo'
                    type='file'
                    id={inputFileBase}
                    onChange={(e) => anadirBase(e, documentosJustificables.id)}
                  />
                  <label htmlFor={inputFileBase}>
                    <AddBoxOutlinedIcon color='primary' />
                  </label>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              <TableCell align='center'>
                <ul>
                  {documentosJustificables.documentos.map((documento) => {
                    if (documento.tipo === 1) {
                      return (
                        <>
                          <li>
                            <CheckCircleIcon
                              color='primary'
                              sx={{fontSize: '18px'}}
                            />

                            {documento.nombre}

                            <button
                              onClick={(e) =>
                                eliminarAnexo(
                                  e,
                                  documento.nombre,
                                  documentosJustificables.id,
                                  documento.id,
                                )
                              }
                            >
                              <DeleteForeverIcon color='secondary' />
                            </button>
                          </li>
                        </>
                      );
                    }
                  })}
                </ul>
              </TableCell>
              <TableCell align='center'>
                <ul>
                  {documentosJustificables.documentos.map((documento) => {
                    if (documento.tipo === 2) {
                      return (
                        <>
                          <li>
                            <CheckCircleIcon
                              color='primary'
                              sx={{fontSize: '18px'}}
                            />
                            {documento.nombre}
                            <button
                              onClick={(e) =>
                                eliminarBase(
                                  e,
                                  documento.nombre,
                                  documentosJustificables.id,
                                  documento.id,
                                )
                              }
                            >
                              <DeleteForeverIcon color='secondary' />
                            </button>
                          </li>
                        </>
                      );
                    }
                  })}
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Grid xs={12}>
        <Typography variant='h5' align='center' component='h5'>
          Explicar fundamentos legales de su justificacion
        </Typography>
      </Grid>
      <Grid xs={12} sx={{padding: '0 5px'}}>
        <textarea
          rows={5}
          value={documentosJustificables.baseLegal}
          onChange={(e) => {
            actualizarFundamento(documentoJustificable, e.target.value);
          }}
        />
      </Grid>
      <style jsx>{styles}</style>
    </>
  );
};

export default TablaDocumento;
