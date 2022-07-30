import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface InfoTitle {
  title: string;
}

const Index = (props: InfoTitle) => {
  const {title} = props;
  return (
    <>
      <Box>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            paddingBottom: '10px',
          }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};

Index.propsDefault = {
  width: '100%',
  title: 'Title',
};

export default Index;
