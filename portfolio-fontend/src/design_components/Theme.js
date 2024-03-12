// theme.js
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        text: {
            primary: "#babbd1",
            secondary: '#babbd1'
        }

    },
    typography: {
        fontFamily: [
            'Fira Code',
            'monospace'
        ].join(','),
        allVariants: {
            color: "#babbd1"
        },

    },

    // Add more customizations such as spacing, breakpoints, etc.
});

export default theme;
