import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { StackOverflowIcon, GitHubIcon } from '../../../components/icons';

import { IPhone, IAddress, IProfiles } from '../resume';

interface BasicDetailsProps {
  name: string;
  email: string;
  phone: IPhone;
  address: IAddress;
  profiles: IProfiles;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  icon: {
    width: 18,
    height: 18,
  },
  margin: {
    margin: theme.spacing(0.8),
  },
  displayNone: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const BasicDetails = ({ name, email, phone, address, profiles }: BasicDetailsProps) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid container alignItems='flex-start' justify='flex-end'>
        <Grid item>
          <Typography variant='h4' component='h1' className={classes.heading} color='textSecondary'>
            {name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems='flex-start' justify='flex-end'>
        <Grid item>
          <Typography variant='subtitle1'>
            {`
              ${address.home}, ${address.street_address}, ${address.city}, ${address.state} 
              ${address.post_code}, ${address.country}
            `}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems='flex-start' justify='flex-end'>
        <Grid item>
          <Typography variant='subtitle1'>{email}</Typography>
        </Grid>
      </Grid>
      <Grid container alignItems='flex-start' justify='flex-end'>
        <Grid item>
          <Typography variant='subtitle1'>{`${phone.country_code}-${phone.mobile}`}</Typography>
        </Grid>
      </Grid>
      <Grid container alignItems='flex-start' justify='flex-end'>
        <Grid item>
          <Grid container>
            <Link href={profiles.linkedIn} target='_blank' rel='noopener'>
              <IconButton size='small' color='secondary'>
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link href={profiles.stackOverflow} target='_blank' rel='noopener'>
              <IconButton size='small' color='secondary'>
                <StackOverflowIcon className={`${classes.icon} ${classes.margin}`} />
              </IconButton>
            </Link>
            <Link href={profiles.github} target='_blank' rel='noopener'>
              <IconButton size='small' color='secondary'>
                <GitHubIcon className={`${classes.icon} ${classes.margin}`} />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasicDetails;
