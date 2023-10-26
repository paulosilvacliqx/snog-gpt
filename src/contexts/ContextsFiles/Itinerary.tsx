import React, { createContext, useState } from "react";
import {
  ItineraryPost,
  ItineraryPostResponse,
} from "../../services/Itineraries/type";

interface UserDataProps {
  itineraryData: ItineraryPost;
  setItineraryData: React.Dispatch<React.SetStateAction<ItineraryPost>>;
  itineraryDataResponse: ItineraryPostResponse;
  setItineraryDataResponse: React.Dispatch<
    React.SetStateAction<ItineraryPostResponse>
  >;
}

// Create Context
export const ItineraryContext = createContext<UserDataProps>(
  {} as UserDataProps
);

// Create Provider
export const ItineraryProvider = (props: any) => {
  const [itineraryData, setItineraryData] = useState({} as ItineraryPost);
  const [itineraryDataResponse, setItineraryDataResponse] = useState(
    {} as ItineraryPostResponse
  );

  return (
    <ItineraryContext.Provider
      value={{
        itineraryData,
        setItineraryData,
        itineraryDataResponse,
        setItineraryDataResponse,
      }}
    >
      {props.children}
    </ItineraryContext.Provider>
  );
};
