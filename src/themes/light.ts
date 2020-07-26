import 'typeface-roboto';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
  typography: {
    fontFamily: ['"Roboto"', '-apple-system', 'Arial', 'sans-serif'].join(','),
    body2: {
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
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
      secondary: blue[600],
    },
    divider: grey[400],
  },
  spacing: 4,
});
