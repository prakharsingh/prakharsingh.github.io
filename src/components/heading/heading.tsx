import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export default ({ leftContent, rightContent }: HeadingProps) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Box className={classes.flexBox}>
        <Box flexGrow={1}>{leftContent}</Box>
        <Box>{rightContent}</Box>
      </Box>
    </div>
  );
};
