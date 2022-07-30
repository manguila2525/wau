import axios from 'axios';
export default async (req, res) => {
  const info = req.body;
  const {data} = await axios.post(
    `${process.env.API_URL_VALIDACION}/api/solicitarValidacion`,
    info,
  );
  console.log(data.executionId);
  res.statusCode = 200;
  res.json(data.executionId);
};
