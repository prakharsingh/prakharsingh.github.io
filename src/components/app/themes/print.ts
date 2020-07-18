import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import core from './core';

export default createMuiTheme({
  ...core,
  palette: {
    primary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
      contrastText: grey[50],
    },
    secondary: {
      light: grey[400],
      main: grey[600],
      dark: grey[800],
      contrastText: grey[50],
    },
    text: {
      primary: grey[700],
      secondary: lightBlue[700],
    },
    divider: grey[400],
  },
});
