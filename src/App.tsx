import { BrowserRouter } from 'react-router-dom';

import { Box } from '@mui/material';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routing from './routes/Routing';

function App() {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
