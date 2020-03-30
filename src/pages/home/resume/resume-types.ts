export interface TPhone {
  mobile: number;
  country_code: string;
}

export interface TAddress {
  home: string;
  street_address: string;
  city: string;
  state: string;
  country: string;
  post_code: string;
}

export interface TProfiles {
  linkedIn: string;
  stackOverflow: string;
  github: string;
}

export interface TSkill {
  name: string;
  link?: string;
  level?: string;
}

export interface TEducationalDetail {
  degree: string;
  specialization: string;
  university: string;
  place: string;
  year: number;
}

export interface TProfessionalDetail {
  company: string;
  designation: string;
  role: string;
  duration: {
    startedAt: string;
    endedAt: string;
  };
  tech: string[];
  summary: string;
  responsibilities: string[];
}

export interface TResume {
  name: string;
  email: string;
  phone: TPhone;
  address: TAddress;
  profiles: TProfiles;
  summary: string;
  skills: TSkill[];
  educationalDetails: TEducationalDetail[];
  professionalDetails: TProfessionalDetail[];
}
