import axios from 'axios';
export const visorArchivoDetalle = async (id) => {
  const {data} = await axios.get(`${process.env.API_URL_DETALLE}/${id}`);
  console.log(data);
  return {
    props: {
      dataPedimentos: data,
    },
  };
};
