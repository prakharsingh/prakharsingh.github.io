import React, { useEffect, useState } from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Routes from '../routes';
import NavBar from '../navbar';
import { darkTheme, lightTheme } from '../themes';

const defaultTheme = createMuiTheme();

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });

  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    setTheme(responsiveFontSizes(darkMode ? darkTheme : lightTheme));
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={setDarkMode} />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
