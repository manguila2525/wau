import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
interface InformacionGlobal {
  patente: string;
  aduana: string;
}
interface Info {
  informacionGlobal: InformacionGlobal;
}
const Header = (props: Info) => {
  const {informacionGlobal} = props;
  return (
    <>
      <Grid item xs={12}>
        <Typography
          id='modal-modal-title'
          variant='h3'
          component='h2'
          sx={{mt: 2, textAlign: 'center', bgcolor: '#f3f3f3ed'}}
        >
          Generar solicitud de justificacion de pedimento
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Agente Aduanal:</b> {informacionGlobal.aduana}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Patente:</b> {informacionGlobal.patente}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Agente/Seccion:</b> 430
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Importador/Exportador:</b> Lorem ipsum dolor sit amet consectetur
          adipisicing elit.asda qwe qwe asda dq
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Rfc:</b> 430
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Clave de doc. original:</b> 430
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Pedimento:</b> 1235156
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Archivo:</b> 430
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography id='modal-modal-description' sx={{mt: 2}}>
          <b>Correo Contacto de la A.A.:</b>{' '}
          <input type='checkbox' name='' id='' /> vawdh@griver.com
        </Typography>
      </Grid>
    </>
  );
};

export default Header;
