import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Header from './Header';
import GuiaGeneral from './GuiaGeneral';
import Errores from './Errores';

interface DetalleError {
  registro: string;
  linea: string;
  campo: string;
  tipo: string;
  consecutivo: string;
  respuesta: string;
}
interface Detalle {
  detalle: DetalleError;
  informacionGlobal: {
    aduana: string;
    patente: string;
  };
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  cambiarErroresJustificables: (errores) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  outline: 'none',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  maxHeight: 680,
  overflow: 'auto',
};
const index = (props: Detalle) => {
  const {
    detalle,
    openModal,
    handleClose,
    informacionGlobal,
    cambiarErroresJustificables,
  } = props;
  console.log(informacionGlobal);
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
            <Grid container spacing={2}>
              <Header informacionGlobal={informacionGlobal} />
              <GuiaGeneral />
              <Errores
                handleClose={handleClose}
                errores={detalle}
                informacionGlobal={informacionGlobal}
                cambiarErroresJustificables={cambiarErroresJustificables}
              />
            </Grid>
          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default index;
