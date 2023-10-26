import React, { createContext, DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';

interface ProfileDataProps {
  scrollTop: number; 
  setScrollTop: React.Dispatch<React.SetStateAction<number>>;
  profile: boolean; 
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create Context
export const ProfileContext = createContext<ProfileDataProps>({} as ProfileDataProps);

// Create Provider
export const ProfileProvider = (props: any) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [profile, setProfile] = useState(false);
  
  return (
    <ProfileContext.Provider value={{
      scrollTop, setScrollTop,
      profile, setProfile
    }}>
      {props.children}
    </ProfileContext.Provider>
  )
}