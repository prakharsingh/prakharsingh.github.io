import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { ISkill } from '../resume';

interface SkillsProps {
  skills: ISkill[];
}

const useStyles = makeStyles(() => ({
  printList: {
    columnCount: 3,
  },
}));

export default ({ skills }: SkillsProps) => {
  const classes = useStyles();
  const matchesPrint = useMediaQuery('print');

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5' component='h2' gutterBottom>
          Skills
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {matchesPrint ? (
          <ul className={classes.printList}>
            {skills.map(({ name }) => (
              <li key={`${name}-item`}>
                <Typography variant='body2'>{name}</Typography>
              </li>
            ))}
          </ul>
        ) : (
          <Box display='flex' flexWrap='wrap'>
            {skills.map(({ name }) => (
              <Box p={1} key={`${name}-box`}>
                <Chip label={name} color='secondary' size='small' />
              </Box>
            ))}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
