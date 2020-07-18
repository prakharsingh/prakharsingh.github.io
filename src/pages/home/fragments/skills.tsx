import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { ISkill } from '../resume';

interface SkillsProps {
  skills: ISkill[];
}

export default ({ skills }: SkillsProps) => {
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
          <Box
            display='flex'
            p={2}
            flexDirection='column'
            height={skills.length * 12}
            flexWrap='wrap'
          >
            {skills.map(({ name }) => (
              <Box key={`${name}-box`}>
                <Typography variant='body1'>{name}</Typography>
              </Box>
            ))}
          </Box>
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
