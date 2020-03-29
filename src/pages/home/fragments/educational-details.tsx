import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';

import {Heading} from '../../../components/heading'

import {TEducationalDetail} from '../resume';

interface EducationalDetailsProps {
  details: TEducationalDetail[];
}

const useStyles = makeStyles({
  boldTypography: {
    fontWeight: 'bold',
  }
});

export default ({details}: EducationalDetailsProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography variant="h5" component="h2" gutterBottom>
          Education
        </Typography>
      </Grid>
      <Grid container spacing={4}>
        {
          details
            .map((detail, idx) => (
              <Grid item sm={12} key={idx}>
                <Heading
                  leftContent={
                    <Typography variant="body2" className={classes.boldTypography}>
                      {`${detail.degree}: ${detail.specialization}`}
                    </Typography>
                  }
                  rightContent={<Typography variant="body2">{detail.year}</Typography>}
                />
                <Heading
                  leftContent={<Typography variant="caption">{detail.university}</Typography>}
                  rightContent={<Typography variant="caption">{detail.place}</Typography>}
                />
              </Grid>
            ))
        }
      </Grid>
    </Grid>
  );
};
