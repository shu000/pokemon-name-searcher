import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#364f6b',
      light: '#5a80aa',
      dark: '#243446',
    },
    secondary: {
      main: '#fc5185',
      light: '#fdb4cb',
      dark: '#e0044a',
    },
    info: {
      main: '#3fc1c9',
      light: '#8Bdade',
      dark: '#22767b',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#dbdbdb',
    },
  },
  typography: {
    fontFamily: ['Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'].join(
      ','
    ),
  },
});

export const generalTheme = responsiveFontSizes(theme);
