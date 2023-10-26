import React, { createContext, useState } from 'react';

interface ValuesTripnessProps {
  travelCuration: boolean;
  setTravelCuration: React.Dispatch<React.SetStateAction<boolean>>;
  routes: boolean;
  setRoutes: React.Dispatch<React.SetStateAction<boolean>>;
  goodTalk: boolean;
  setGoodTalk: React.Dispatch<React.SetStateAction<boolean>>;
  destiny: boolean;
  setDestiny: React.Dispatch<React.SetStateAction<boolean>>;
  trips: boolean;
  setTrips: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create Context
export const ValuesTripnessContext = createContext<ValuesTripnessProps>({} as ValuesTripnessProps);

// Create Provider
export const ValuesTripnessProvider = (props: any) => {
  const [travelCuration, setTravelCuration] = useState(true);
  const [routes, setRoutes] = useState(false);
  const [goodTalk, setGoodTalk] = useState(false);
  const [destiny, setDestiny] = useState(false);
  const [trips, setTrips] = useState(false);

  return (
    <ValuesTripnessContext.Provider value={{
      travelCuration, setTravelCuration,
      routes, setRoutes,
      goodTalk, setGoodTalk,
      destiny, setDestiny,
      trips, setTrips,
    }}>
      {props.children}
    </ValuesTripnessContext.Provider>
  )
}