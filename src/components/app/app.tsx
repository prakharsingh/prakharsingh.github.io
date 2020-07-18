import React, { useState } from 'react';
import { responsiveFontSizes, ThemeProvider, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Routes from '../routes';
import NavBar from '../navbar';
import { darkTheme, lightTheme, printTheme } from './themes';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
  const matchesPrint = useMediaQuery('print');

  const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode);

  const createTheme = (): Theme => {
    if (matchesPrint) return responsiveFontSizes(printTheme);
    if (darkMode) return responsiveFontSizes(darkTheme);
    return lightTheme;
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={setDarkMode} />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
