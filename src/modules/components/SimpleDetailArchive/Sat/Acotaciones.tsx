import Box from '@mui/material/Box';

const Acotaciones = () => {
  return (
    <>
      <Box sx={{margin: '30px 0', padding: '0 5%'}}>
        <ul>
          <li>
            <p>
              La Solicitud de Justificación está sujeta a revisión por parte del
              Prevalidador
            </p>
          </li>
          <li>
            <p>
              La Solicitud de Justificación está sujeta al siguiente Horario de
              Atención establecido por la Aduana:
              <b> Lunes a Viernes de 08:00 a 15:00 horas.</b>
            </p>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default Acotaciones;
