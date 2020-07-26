import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Heading } from '../../../components/heading';

import { IEducationalDetail } from '../resume';

interface EducationalDetailsProps {
  details: IEducationalDetail[];
}

const useStyles = makeStyles((theme) => ({
  item: {
    width: '100%',
  },
  boldTypography: {
    fontWeight: 'bold',
  },
  avoidPageBreak: {
    pageBreakInside: 'avoid',
    pageBreakAfter: 'auto',
  },
}));

export default ({ details }: EducationalDetailsProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.avoidPageBreak}>
      <Grid item>
        <Typography variant='h5' component='h2' gutterBottom>
          Education
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
                  {`${detail.degree}: ${detail.specialization}`}
                </Typography>
              }
              rightContent={<Typography variant='body2'>{detail.year}</Typography>}
            />
            <Heading
              leftContent={<Typography variant='subtitle1'>{detail.university}</Typography>}
              rightContent={<Typography variant='subtitle1'>{detail.place}</Typography>}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
