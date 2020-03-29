import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';

import {TProfessionalDetail} from '../resume';
import {Heading} from "../../../components/heading";

interface ProfessionalDetailsProps {
  details: TProfessionalDetail[];
}

const useStyles = makeStyles({
  boldTypography: {
    fontWeight: 'bold',
  }
});

export default ({details}: ProfessionalDetailsProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography variant="h5" component="h2" gutterBottom>
          Work
        </Typography>
      </Grid>
      <Grid container spacing={4}>
        {
          details
            .map((detail, idx) =>
              <Grid item sm={12} key={idx}>
                <Typography variant="body2" className={classes.boldTypography}>
                  {`${detail.designation} (${detail.role})`}
                </Typography>
                <Heading
                  leftContent={<Typography variant="caption">{detail.company}</Typography>}
                  rightContent={
                    <Typography variant="caption">
                      {`${detail.duration.startedAt} - ${detail.duration.endedAt}`}
                    </Typography>
                  }
                />
                <br/>
                {
                  detail.summary &&
                  <React.Fragment>
                    <Typography variant='body2' align='justify'>
                      {detail.summary}
                    </Typography>
                    <br/>
                  </React.Fragment>
                }
                <Typography variant='body2' align='justify' className={classes.boldTypography}>
                  {`Tech Stack: ${detail.tech.join(', ')}`}
                </Typography>
                <ul>
                  {
                    detail
                      .responsibilities
                      .map((responsibility, index) => (
                        <li key={`responsibility-${index}`}>
                          <Typography variant='body2' align='justify'>
                            {responsibility}
                          </Typography>
                        </li>
                      ))
                  }
                </ul>
              </Grid>
            )
        }
      </Grid>
    </Grid>
  );
};
