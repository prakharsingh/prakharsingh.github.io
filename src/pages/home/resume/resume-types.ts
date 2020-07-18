export interface IPhone {
  mobile: number;
  country_code: string;
}

export interface IAddress {
  home: string;
  street_address: string;
  city: string;
  state: string;
  country: string;
  post_code: string;
}

export interface IProfiles {
  linkedIn: string;
  stackOverflow: string;
  github: string;
}

export interface ISkill {
  name: string;
  link?: string;
  level?: string;
}

export interface IEducationalDetail {
  degree: string;
  specialization: string;
  university: string;
  place: string;
  year: number;
}

export interface IProfessionalDetail {
  company: string;
  designation: string;
  role: string;
  duration: {
    startedAt: string;
    endedAt: string;
  };
  location: string;
  tech: string[];
  summary: string;
  responsibilities: string[];
}

export interface IResume {
  name: string;
  email: string;
  phone: IPhone;
  address: IAddress;
  profiles: IProfiles;
  summary: string;
  skills: ISkill[];
  educationalDetails: IEducationalDetail[];
  professionalDetails: IProfessionalDetail[];
}
