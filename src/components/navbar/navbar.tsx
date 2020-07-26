import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import NightIcon from '@material-ui/icons/NightsStayOutlined';
import DayIcon from '@material-ui/icons/WbSunnyOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  iconButton: {
    padding: theme.spacing(0, 2),
  },
}));

const HideOnScroll = ({ children }: { children: React.ReactElement }): JSX.Element => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const NavBar = ({ darkMode, toggleDarkMode }: NavBarProps) => {
  const classes = useStyles();
  const matchesPrint = useMediaQuery('print');

  if (matchesPrint) return null;

  const handleBrightness = () => toggleDarkMode(!darkMode);

  const handleDownloadPdf = () => window.open('/cv_singh_prakhar.pdf', '_blank');

  return (
    <HideOnScroll>
      <AppBar position='static' variant={darkMode ? 'outlined' : 'elevation'}>
        <Toolbar variant='dense'>
          <Typography variant='button' display='block' className={classes.title}>
            Resume
          </Typography>
          <MenuItem onClick={handleDownloadPdf}>
            <GetAppIcon />
          </MenuItem>
          <MenuItem onClick={handleBrightness}>{darkMode ? <DayIcon /> : <NightIcon />}</MenuItem>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
