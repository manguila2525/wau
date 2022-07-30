import axios from 'axios';
export const convertirStringArray = (string) => {
  let convertir = string.split(' ');
  const finalResult = separarError(convertir);
  console.log(finalResult);
  return finalResult;
};

const apiErrors = async (Err) => {
  const {data} = await axios.post('/api/satErrors', Err);
  return await data;
};

const separarError = (err) => {
  let newResult = err.map((error) => {
    if (error[0] === 'E') {
      // const respuesta = apiErrors({
      //   registro: error.slice(8, 11),
      //   linea: error.slice(11, 15),
      //   campo: error.slice(16, 18),
      //   tipo: error.slice(15, 16),
      //   consecutivo: error.slice(18, 20),
      // });

      return {
        pedimento: error.substr(0, 7),
        error: error.substr(7),
        detalle: {
          registro: error.slice(8, 11),
          linea: error.slice(11, 15),
          campo: error.slice(16, 18),
          tipo: error.slice(15, 16),
          consecutivo: error.slice(18, 20),
          respuesta: 'HAY DIFERENCIAS EN MONTOS A FAVOR DECL. VS CALCULADO',
        },
      };
    } else {
      return error;
    }
  });
  return newResult;
};
