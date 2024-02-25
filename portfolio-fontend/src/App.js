import { Box, ThemeProvider } from '@mui/material';
import './App.css';
import Cursor from './design_components/Cursor';

import CustomButton from './design_components/CustomButton';
import theme from './design_components/Theme';
import { MouseContext, MouseProvider } from './design_components/MouseContext';
import MainAnimation from './components/MainAnimation';
import { AnimationProvider } from './design_components/AnimationContext';
import LandingPage from './components/LandingPage';
import Terminal from './components/Terminal';

function App() {

  return (
    <Box sx={{ minHeight: '100vh', minWidth: '100vw', backgroundColor: '#FFF', overflow: 'hidden' }}>
      <AnimationProvider>
        <ThemeProvider theme={theme}>
          <MouseProvider>
            {/* <Canvas /> */}
            <Cursor />
            <MainAnimation />
            <LandingPage />
            {/* <Terminal /> */}
          </MouseProvider>
        </ThemeProvider>
      </AnimationProvider>
    </Box >
  );
}


export default App;
