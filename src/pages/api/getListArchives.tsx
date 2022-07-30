import axios from 'axios';
export default async (req, res) => {
  const info = req.body;
  const {data} = await axios.post(`${process.env.API_LISTADO_ARCHIVO}`, info);
  console.log(data);
  res.statusCode = 200;
  res.json(data);
};
