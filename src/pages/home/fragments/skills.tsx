import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import {TSkill} from '../resume';

interface SkillsProps {
  skills: TSkill[]
}

export default ({skills}: SkillsProps) => {
  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography variant="h5" component="h2" gutterBottom>
          Skills
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Box
          display="flex"
          flexWrap="wrap"
        >
          {
            skills
              .map(({name}) =>
                <Box p={1} key={`${name}-box`}>
                  <Chip
                    label={name}
                    color="secondary"
                    size="small"
                  />
                </Box>
              )
          }
        </Box>
      </Grid>
    </Grid>
  );
};
