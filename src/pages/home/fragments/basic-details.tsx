import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { StackOverflowIcon, GitHubIcon } from '../../../components/icons';

import { TPhone, TAddress, TProfiles } from '../resume';

interface BasicDetailsProps {
  name: string;
  email: string;
  phone: TPhone;
  address: TAddress;
  profiles: TProfiles;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  subHeading: {
    '& hr': {
      margin: theme.spacing(0, 1),
    },
  },
  icon: {
    width: 18,
    height: 18,
  },
  margin: {
    margin: theme.spacing(0.8),
  },
}));

const BasicDetails = ({ name, email, phone, address, profiles }: BasicDetailsProps) => {
  const classes = useStyles();

  return (
    <Grid item sm={12}>
      <Grid container alignItems='flex-start' justify='flex-end' direction='row'>
        <Grid item>
          <Typography variant='h4' component='h1' className={classes.heading} color='textSecondary'>
            {name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems='flex-start' justify='flex-end' direction='row'>
        <Grid item>
          <Grid container className={classes.subHeading}>
            <Typography variant='caption'>
              {`${address.home}, ${address.street_address}, ${address.city}, ${address.state} ${address.post_code}`}
            </Typography>
            <Divider orientation='vertical' flexItem />
            <Typography variant='caption'>{`${phone.country_code}-${phone.mobile}`}</Typography>
            <Divider orientation='vertical' flexItem />
            <Typography variant='caption'>{email}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems='flex-start' justify='flex-end' direction='row'>
        <Grid item>
          <Grid container className={classes.subHeading}>
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
