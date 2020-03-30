import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import BasicDetails from './fragments/basic-details';
import Summary from './fragments/summary';
import Skills from './fragments/skills';
import EducationalDetails from './fragments/educational-details';
import ProfessionalDetails from './fragments/professional-details';

import { TResume, ResumeContext, ResumeProvider } from './resume';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();
  const {
    name,
    email,
    phone,
    address,
    profiles,
    summary,
    skills,
    educationalDetails,
    professionalDetails,
  }: TResume = useContext(ResumeContext);

  return (
    <Grid className={classes.margin}>
      <BasicDetails name={name} email={email} phone={phone} address={address} profiles={profiles} />
      <Summary summary={summary} />
      <br />
      <Skills skills={skills} />
      <br />
      <ProfessionalDetails details={professionalDetails} />
      <br />
      <EducationalDetails details={educationalDetails} />
    </Grid>
  );
};

export default () => (
  <ResumeProvider>
    <Home />
  </ResumeProvider>
);
