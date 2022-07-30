import IntlMessages from '../../../@crema/utility/IntlMessages';
import {FormLabel, ToggleButton, ToggleButtonGroup} from '@mui/material';
import React from 'react';
import {useIntl} from 'react-intl';

interface TipoEnvioProps {
  tipo: string;
  onChange: any;
}

const TipoEnvio: React.FC<TipoEnvioProps> = ({tipo, onChange}) => {
  const {messages} = useIntl();

  const handleChange = (event, newTipo) => {
    onChange(newTipo);
  };

  return (
    <>
      <FormLabel>
        <IntlMessages id='prevalidador.procesarArchivos.tipoEnvio.titulo' />
      </FormLabel>
      <ToggleButtonGroup
        sx={{
          px: 2,
        }}
        color='primary'
        value={tipo}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value='serie'>
          {messages['prevalidador.procesarArchivos.tipoEnvio.serial']}
        </ToggleButton>
        <ToggleButton value='paraleo'>
          {messages['prevalidador.procesarArchivos.tipoEnvio.paralelo']}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default TipoEnvio;
