// theme.js
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Change primary color
        },
        secondary: {
            main: '#dc004e', // Change secondary color
        },
        // You can add more custom colors if needed
    },
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        // You can customize typography such as font size, weight, etc.
    },
    // Add more customizations such as spacing, breakpoints, etc.
});

export default theme;
