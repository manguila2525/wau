import axios from 'axios';
export const aduanaLista = async () => {
  const data = await axios.post(
    `${process.env.API_URL}/api/api/listadoAduana`,
    {
      aduana: '270',
      fechaDesde: '2020-04-01 07:00:00',
      fechaHasta: '2020-04-01 07:59:59',
    },
  );

  return data.data;
};
