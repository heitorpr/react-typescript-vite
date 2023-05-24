import { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Link, Typography } from '@mui/material';

function NotFound(): ReactElement {
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
      <Typography variant="h1">Not found</Typography>
      <Link component={RouterLink} to="/">
        Go home
      </Link>
    </Box>
  );
}

export default NotFound;
