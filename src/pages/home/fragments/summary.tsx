import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface SummaryProps {
  summary: string
}

export default ({summary}: SummaryProps) => {
  return (
    <Grid item sm={12}>
      <Typography variant="h5" component="h2" gutterBottom>
        Professional Summary
      </Typography>
      <Typography variant="subtitle2" align="justify" gutterBottom>
        {summary}
      </Typography>
    </Grid>
  );
}
