import axios from 'axios';
export const visorAuditorDetalle = async (id) => {
  const {data} = await axios.get(
    `${process.env.API_URL_DETALLE_AUDITOR}/${id}`,
  );
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
