import { createTheme } from "@mui/material/styles";
import shadows, { Shadows } from "@mui/material/styles/shadows";

export const materialCustomTheme = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    info: {
      main: '#00acc1',
      contrastText: 'white',
    },
    primary: {
      main: '#66b2b2',
      contrastText: 'white',
    },
    error: {
      main: '#ff5252',
      contrastText: 'white',
    },
  },
});