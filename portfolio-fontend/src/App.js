import { ThemeProvider } from '@mui/material';
import './App.css';
import Cursor from './design_components/Cursor';

import CustomButton from './design_components/CustomButton';
import theme from './design_components/Theme';
import { MouseContext, MouseProvider } from './design_components/MouseContext';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <MouseProvider>
        <Cursor />
        <CustomButton />
      </MouseProvider>

    </ThemeProvider>
  );
}

export default App;
