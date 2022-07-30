import axios from 'axios';
export default async (req, res) => {
  const info = req.body;
  const {data} = await axios.post(
    `https://ozib7lr4z1.execute-api.us-east-1.amazonaws.com/api/api/listadoPedimentos`,
    // info,
    {
      aduana: '270',
      fechaDesde: '2020-04-01 07:00:00',
      fechaHasta: '2020-04-01 07:59:59',
    },
  );

  res.statusCode = 200;
  res.json(data);
};
