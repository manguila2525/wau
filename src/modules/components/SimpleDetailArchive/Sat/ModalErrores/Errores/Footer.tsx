import Typography from '@mui/material/Typography';

import styles from './style';

const Footer = () => {
  return (
    <>
      <Typography variant='h5' align='center' component='h5' color='primary'>
        *Extractos de articulos, leyes, circulares, etc.
      </Typography>
      <Typography variant='h5' align='center' component='h5' color='primary'>
        *Si el conjunto de archivos excede los 14.5MB, se enviara una secuencia
        de correos electronicos.
      </Typography>
    </>
  );
};

export default Footer;
