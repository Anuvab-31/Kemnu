import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import {colors} from "@mui/material";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(63, 33, 101)',
        },
        secondary: {
            main: colors.indigo[500],
        },
        background: {
            default: '#F5F5FB',
            strike: '#C6C6C6',
            text: '#7E7E7E',
            search: '#E9E9F2',
            primary: '#E2EAFF',
            secondary: '#EBFFE2',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: 'gotham-medium, sans-serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontWeight: 500,
            fontSize: '64px',
            letterSpacing: '-0.24px',
        },
        h2: {
            fontWeight: 500,
            fontSize: 29,
            letterSpacing: '-0.24px'
        },
        h3: {
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: '-0.06px'
        },
        h4: {
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: '-0.06px'
        },
        h5: {
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0.05px'
        },
        h6: {
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: '-0.05px'
        },
        overline: {
            fontWeight: 500
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
            letterSpacing: '0.5px',
        },
        subtitle2: {
            fontWeight: 100,
            fontSize: '12px',
            lineHeight: '16.71px',
            letterSpacing: '0.4px',
        },
        body1: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
        },
        // button: {
        //     fontWeight: 500,
        //     fontSize: '16px',
        //     lineHeight: '25px',
        //     letterSpacing: '0.02857em',
        //     // textTransform: 'uppercase',
        // },
    },
});

export default theme;
