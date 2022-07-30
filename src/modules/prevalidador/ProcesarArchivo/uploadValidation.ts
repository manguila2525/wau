import axios from 'axios';
export const submitValidation = async (
  e,
  upload,
  getResult,
  setResult,
  finalData,
  api,
  setEstadoRevision,
) => {
  e.preventDefault();

  if (upload.length > 0) {
    console.log(finalData);
    console.log(api);
    if (api.procesar === 'archivo') {
      const {data} = await axios.post('/api/validacion', finalData);
      await getApi(data, getResult, setResult, api);
    }
    if (api.procesar === 'auditor') {
      const {data} = await axios.post('/api/revision', finalData);
      await estadoRevision(data, setEstadoRevision, api);
    }
  } else {
    alert('No hay archivo para enviar');
  }
};
const getApi = async (executionId, getResult, setResult, api) => {
  do {
    let {data} = await axios.get(`${api.url}/${executionId}`);
    console.log(data);
    if (data.estadoArchivo === 'RUNNING') {
      setResult('RUNNING');
    }
    if (data.estadoArchivo === 'SUCCEEDED') {
      setResult('SUCCEEDED');
      setTimeout(() => {
        setResult('');
      }, 3000);
      break;
    }
  } while (getResult !== 'SUCCEEDED');
};

const estadoRevision = async (executionId, setResult, api) => {
  let {data} = await axios.get(`${api.url}/${executionId}`);
  setResult(data);
};
