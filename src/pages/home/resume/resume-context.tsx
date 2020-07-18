import React, { createContext } from 'react';
import { IResume } from './resume-types';
import {
  name,
  email,
  address,
  phone,
  profiles,
  summary,
  skills,
  educationalDetails,
  professionalDetails,
} from './resume.json';

interface IProps {
  children: React.ReactNode;
}

const ResumeContext = createContext<IResume>({} as IResume);

const ResumeProvider = ({ children }: IProps) => {
  return (
    <ResumeContext.Provider
      value={{
        name,
        email,
        address,
        phone,
        profiles,
        summary,
        skills,
        educationalDetails,
        professionalDetails,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export { ResumeProvider, ResumeContext };
