import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export interface HeadingProps {
  leftContent: JSX.Element;
  rightContent: JSX.Element;
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
  },
  flexBox: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  printBox: {
    display: '-webkit-flex',
  },
}));

export default ({ leftContent, rightContent }: HeadingProps) => {
  const classes = useStyles();
  const matchesPrint = useMediaQuery('print');

  return (
    <div className={classes.wrapper}>
      <Box className={matchesPrint ? classes.printBox : classes.flexBox}>
        <Box flexGrow={1}>{leftContent}</Box>
        <Box>{rightContent}</Box>
      </Box>
    </div>
  );
};
