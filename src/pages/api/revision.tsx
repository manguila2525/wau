import axios from 'axios';
export default async (req, res) => {
  const info = req.body;
  const {data} = await axios.post(
    `${process.env.API_URL_VALIDACION}/api/solicitarRevision`,
    info,
  );
  console.log(info);
  console.log(data[0].executionId);
  res.statusCode = 200;
  res.json(data[0].executionId);
};
