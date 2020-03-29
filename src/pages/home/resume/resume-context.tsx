import React, {createContext} from 'react';
import RESUME from './resume.json';

interface TProps {
  children: React.ReactNode
}

const ResumeContext = createContext(RESUME);

// tslint:disable-next-line:no-any
const ResumeProvider = (props: TProps) => {
  return (
    <ResumeContext.Provider value={RESUME}>
      {props.children}
    </ResumeContext.Provider>
  )
};

export {ResumeProvider, ResumeContext}
