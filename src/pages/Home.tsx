import { ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

function Home(): ReactElement {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1">Home</Typography>
      <Typography variant="body1">{import.meta.env.VITE_API_URL}</Typography>
    </Box>
  );
}

export default Home;
