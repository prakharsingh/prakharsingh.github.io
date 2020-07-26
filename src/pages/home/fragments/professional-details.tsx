import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { IProfessionalDetail } from '../resume';
import { Heading } from '../../../components/heading';

interface ProfessionalDetailsProps {
  details: IProfessionalDetail[];
}

const useStyles = makeStyles({
  item: {
    flexGrow: 1,
  },
  boldTypography: {
    fontWeight: 'bold',
  },
  avoidPageBreak: {
    pageBreakInside: 'avoid',
    pageBreakAfter: 'auto',
  },
});

export default ({ details }: ProfessionalDetailsProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Typography variant='h5' component='h2' gutterBottom>
          Work
        </Typography>
      </Grid>
      <Grid container spacing={4}>
        {details.map((detail, idx) => (
          <Grid
            key={idx} // eslint-disable-line react/no-array-index-key
            className={classes.avoidPageBreak}
            classes={{ item: classes.item }}
            item
          >
            <Heading
              leftContent={
                <Typography variant='body2' className={classes.boldTypography}>
                  {`${detail.designation} (${detail.role})`}
                </Typography>
              }
              rightContent={<Typography variant='subtitle1'>{detail.location}</Typography>}
            />
            <Heading
              leftContent={<Typography variant='subtitle1'>{detail.company}</Typography>}
              rightContent={
                <Typography variant='subtitle1'>
                  {`${detail.duration.startedAt} - ${detail.duration.endedAt}`}
                </Typography>
              }
            />
            <br />
            {detail.summary && (
              <>
                <Typography variant='body2' align='justify'>
                  {detail.summary}
                </Typography>
                <br />
              </>
            )}
            <Typography variant='body2' align='justify' className={classes.boldTypography}>
              {`Tech Stack: ${detail.tech.join(', ')}`}
            </Typography>
            <ul>
              {detail.responsibilities.map((responsibility, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={`responsibility-${index}`} className={classes.avoidPageBreak}>
                  <Typography variant='body2' align='justify'>
                    {responsibility}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
