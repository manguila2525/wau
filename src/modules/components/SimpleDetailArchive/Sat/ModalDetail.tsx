import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

interface DetalleError {
  detalle: {
    tipoRegistro: string;
    consecutivo: string;
    campo: string;
    descripcionSiara: string;
  };
  linea: string;
  tipo: string;
  respuesta: string;
}
interface Detalle {
  detalle: DetalleError;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};
const ModalDetail = (props: Detalle) => {
  const {detalle, openModal, handleClose} = props;

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Container>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography
                  id='modal-modal-title'
                  variant='h3'
                  component='h2'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  Detalle de error
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  <b>Registro: </b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  {detalle.detalle.tipoRegistro}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  <b> Linea:</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  {detalle.linea}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  <b> Campo: </b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  {detalle.detalle.campo}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  <b>Tipo:</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  {detalle.tipo}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  <b>Consecutivo:</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  {detalle.detalle.consecutivo}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  <b> Descripcion:</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id='modal-modal-description'
                  sx={{mt: 2, textAlign: 'center'}}
                >
                  {detalle.detalle.descripcionSiara}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default ModalDetail;
