import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export interface IThemeProps {
  children?: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#EA7F28',
      dark: '#D37324',
      contrastText: '#fff',
    },
    text: {
      primary: '#4A4A4A',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 88,
      flexWrap: 'wrap',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          textDecoration: 'none',
          '&:hover': {
            color: '#D37324',
            textDecoration: 'underline',
          },
          '&.active': {
            color: '#D37324',
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: 'auto',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          width: 128,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    }
  },
});

export const Theme = ({ children }: IThemeProps): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
