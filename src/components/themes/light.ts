import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
      contrastText: grey[50],
    },
    secondary: {
      light: grey[400],
      main: grey[600],
      dark: grey[800],
      contrastText: grey[50],
    },
    text: {
      primary: grey[900],
      secondary: indigo[500],
    },
    divider: grey[400],
  },
  spacing: 4,
});
