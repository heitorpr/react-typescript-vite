import { ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

function About(): ReactElement {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1">About</Typography>
    </Box>
  );
}

export default About;
