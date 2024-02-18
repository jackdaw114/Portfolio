import { Box, ThemeProvider } from '@mui/material';
import './App.css';
import Cursor from './design_components/Cursor';

import CustomButton from './design_components/CustomButton';
import theme from './design_components/Theme';
import { MouseContext, MouseProvider } from './design_components/MouseContext';
import MainAnimation from './components/MainAnimation';

function App() {

  return (
    <Box sx={{ minHeight: '100vh', minWidth: '100vw' }}>

      <ThemeProvider theme={theme}>
        <MouseProvider>
          <Cursor />
          <MainAnimation />
        </MouseProvider>

      </ThemeProvider>
    </Box>
  );
}

export default App;
