import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ darkMode, toggleDarkMode }: NavBarProps) => {
  const classes = useStyles();

  const handleBrightness = () => toggleDarkMode(!darkMode);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography variant='button' display='block' className={classes.title}>
            Resume
          </Typography>
          <Tooltip title='Toggle dark mode'>
            <IconButton onClick={handleBrightness} edge='start' color='inherit' aria-label='menu'>
              <SettingsBrightnessIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
