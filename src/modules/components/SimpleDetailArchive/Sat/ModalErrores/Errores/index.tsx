import {useEffect, useState} from 'react';
import TablaErrorDescripcion from './TablaErrorDescripcion';
import TablaDocumento from './TablaDocumento';
import FundamentosLegales from './FundamentosLegales';
import Footer from './Footer';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import styles from './style';

const index = (props) => {
  const {handleClose, errores, informacionGlobal, cambiarErroresJustificables} =
    props;

  const [total, setTotal] = useState<any>([]);

  const listarTotal = (valor) => {
    setTotal((valorAnterior) => [...valorAnterior, valor]);
  };

  const actualizarEstado = (id, anexo) => {
    const valorActualizado = total.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          cargaAnexos: anexo,
        };
      }
      return user;
    });
    setTotal(valorActualizado);
  };

  const actualizarBase = (id, base) => {
    const valorActualizado = total.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          baseLegal: base,
        };
      }
      return user;
    });
    setTotal(valorActualizado);
  };

  const actualizarFundamento = (id, fundamento) => {
    const valorActualizado = total.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          fundamentoLegal: fundamento,
        };
      }
      return user;
    });
    setTotal(valorActualizado);
  };

  const anadirTotal = (valor) => {
    const filtro = total.filter((busqueda) => busqueda.id == valor.id);
    console.log(filtro);
  };

  return (
    <>
      <Grid xs={12}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            cambiarErroresJustificables(total);
          }}
        >
          {errores.detalle.map((error, i) => {
            if (typeof error !== 'string') {
              return (
                <>
                  <TablaDocumento
                    global={errores}
                    documentos={error}
                    actualizarEstado={actualizarEstado}
                    actualizarBase={actualizarBase}
                    actualizarFundamento={actualizarFundamento}
                    documentoJustificable={i}
                    listarTotal={listarTotal}
                    anadirTotal={anadirTotal}
                  />
                </>
              );
            }
          })}
          <Footer />
          {errores.detalle.lenght !== 0 && (
            <Grid xs={12}>
              <section>
                <Button
                  type='submit'
                  variant='contained'
                  size='small'
                  sx={{mx: '2px'}}
                >
                  Generar
                </Button>
                <Button
                  variant='contained'
                  size='small'
                  onClick={() => handleClose()}
                >
                  Cerrar
                </Button>
              </section>
            </Grid>
          )}
        </form>
      </Grid>
      <style jsx>{styles}</style>
    </>
  );
};

export default index;
