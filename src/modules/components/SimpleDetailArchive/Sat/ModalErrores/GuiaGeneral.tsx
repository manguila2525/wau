import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from './style';
const GuiaGeneral = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          id='modal-modal-title'
          variant='h3'
          component='h2'
          sx={{mt: 2, textAlign: 'center', bgcolor: '#f3f3f3ed'}}
        >
          Guia General de Requisitos
        </Typography>
      </Grid>
      <Grid item xs={12} color='primary'>
        <ul>
          <li>
            <Typography
              color='primary'
              id='modal-modal-title'
              variant='h6'
              component='h6'
            >
              Archivos de validacion de juliano y .err (Ejemplo: m9999457.302 y
              m9999457.err).
            </Typography>
          </li>
          <li>
            <Typography
              color='primary'
              id='modal-modal-title'
              variant='h6'
              component='h6'
            >
              Reporte de Firmas y Errores.
            </Typography>
          </li>
          <li>
            <Typography
              color='primary'
              id='modal-modal-title'
              variant='h6'
              component='h6'
            >
              Pedimento Original (Normal, 10ma Resolucion y Simplificado).
            </Typography>
          </li>
          <li>
            <Typography
              color='primary'
              id='modal-modal-title'
              variant='h6'
              component='h6'
            >
              Pedimento de Rectificacion en el caso que aplique (Normal, 10ma
              Resolucion y Simplificado).
            </Typography>
          </li>
          <li>
            <Typography
              color='primary'
              id='modal-modal-title'
              variant='h6'
              component='h6'
            >
              En su caso Pedimentos Relacionados con la operacion (Normal, 10ma
              Resolucion y Simplificado).
            </Typography>
          </li>
          <li>
            <Typography
              color='primary'
              id='modal-modal-title'
              variant='h6'
              component='h6'
            >
              Anexos del Pedimento (Facturas Comerciales, Conocimiento Maritimo,
              Guia Aerea, Certificado de Origen, Carta de No Comercializacion,
              etc.).
            </Typography>
          </li>
          <li>
            <Typography
              color='primary'
              id='modal-modal-title'
              variant='h6'
              component='h6'
            >
              Calculos de las Contribuciones (En caso de que el error de
              validacion sea de lo mismo).
            </Typography>
          </li>
        </ul>
        <Typography
          color='primary'
          id='modal-modal-title'
          variant='h6'
          component='h6'
        >
          <b>Nota.-</b> La solicitud de justificaciones debera estar debidamente
          llenada de conformidad con el MOA, en el punto referente a la base
          legal en que se sustente la justificacion, indicando R.C.G..M.C.E,
          parrafo, inciso, fraccion, articulo de la ley aplicable, decreto
          acuerdo etc. Todo lo anterior con fecha de publicacion y/o ultima
          modificacion del D.O.F., lo anterior de conformidad a lo ya
          establecido en la operacion
        </Typography>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h6'
          sx={{my: 5}}
          color='primary'
        >
          <b>Nota 1.-</b> Toda la Documentacion que se adjunte debera de ser
          enviada en PDF. <br /> El tamano por archivo debe ser menor a 14.5MB y
          el conjunto de archivos a cargar no debe de exceder los 14.5MB.
        </Typography>
      </Grid>
      <style jsx>{styles}</style>
    </>
  );
};

export default GuiaGeneral;
