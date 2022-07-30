import React, {ReactNode} from 'react';
import {alpha, Box} from '@mui/material';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {Fonts} from '../../../shared/constants/AppEnums';

interface HeaderProps {
  title?: String;
  messageId?: String;
}

const Pageheader: React.FC<HeaderProps> = ({title, messageId}) => {
  return (
    <Box
      component='h2'
      sx={{
        color: 'text.primary',
        fontWeight: Fonts.SEMI_BOLD,
        mb: {
          xs: 2,
          lg: 4,
        },
      }}
    >
      {title ? title : <IntlMessages id={messageId} />}
    </Box>
  );
};

export default Pageheader;
