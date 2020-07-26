import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface SummaryProps {
  summary: string;
}

const useStyles = makeStyles({
  avoidPageBreak: {
    pageBreakInside: 'avoid',
    pageBreakAfter: 'auto',
  },
});

export default ({ summary }: SummaryProps) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.avoidPageBreak}>
      <Typography variant='h5' component='h2' gutterBottom>
        Professional Summary
      </Typography>
      <Typography variant='body2' align='justify' gutterBottom>
        {summary}
      </Typography>
    </Grid>
  );
};
