export default async (req, res) => {
  const result = req.body;
  //const {data} = axios.post('/api/api/descripcionErrorSat', result)
  const descripcion = 'HAY DIFERENCIAS EN MONTOS A FAVOR DECL. VS CALCULADO';
  res.statusCode = 200;
  res.json(descripcion);
};
