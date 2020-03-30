import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';

export default createMuiTheme({
  palette: {
    primary: {
      light: grey[600],
      main: grey[800],
      dark: grey[900],
      contrastText: grey[50],
    },
    secondary: {
      light: grey[100],
      main: grey[300],
      dark: grey[500],
      contrastText: grey[900],
    },
    background: {
      default: grey[900],
      paper: grey[900],
    },
    text: {
      primary: grey[50],
      secondary: indigo[500],
    },
    divider: grey[100],
  },
  spacing: 4,
});
