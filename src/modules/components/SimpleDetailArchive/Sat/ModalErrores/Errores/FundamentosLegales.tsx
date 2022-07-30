import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from './style';

const FundamentosLegales = () => {
  return (
    <>
      <Grid xs={12}>
        <Typography variant='h5' align='center' component='h5'>
          Explicar fundamentos legales de su justificacion
        </Typography>
      </Grid>
      <Grid xs={12} sx={{padding: '0 5px'}}>
        <textarea rows={5} />
      </Grid>
      <style jsx>{styles}</style>
    </>
  );
};

export default FundamentosLegales;
