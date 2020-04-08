import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import core from './core';

export default createMuiTheme({
  ...core,
  palette: {
    primary: {
      light: lightBlue[600],
      main: lightBlue[800],
      dark: lightBlue[900],
      contrastText: blueGrey[50],
    },
    secondary: {
      light: grey[100],
      main: grey[300],
      dark: grey[500],
      contrastText: grey[900],
    },
    background: {
      default: blueGrey[900],
      paper: blueGrey[700],
    },
    text: {
      primary: blueGrey[100],
      secondary: lightBlue[500],
    },
    divider: blueGrey[100],
  },
});
