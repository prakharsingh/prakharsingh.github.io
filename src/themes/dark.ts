import 'typeface-share-tech-mono';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
  typography: {
    fontFamily: ['"Share Tech Mono"', '-apple-system', 'Arial', 'sans-serif'].join(','),
    h5: {
      color: grey[200],
    },
    body2: {
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      light: grey[600],
      main: grey[900],
      dark: grey[900],
      contrastText: grey[50],
    },
    secondary: {
      light: grey[200],
      main: grey[400],
      dark: grey[600],
      contrastText: grey[900],
    },
    background: {
      default: grey[900],
      paper: grey[700],
    },
    text: {
      primary: grey[400],
      secondary: grey[200],
    },
    divider: blueGrey[100],
  },
  spacing: 4,
});
