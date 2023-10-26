export type Itinerary = {
  active: boolean;
  created_at: string;
  itinerary_data: string;
  itinerary_id: number;
  itinerary_name: string;
  user_id: number;
};

export type ItineraryResponse = {
  itineraries: Itinerary[];
  success: boolean;
};

export type ItineraryByIdResponse = {
  itinerary: Itinerary;
  success: boolean;
};

export type Response<T> = {
  data: T;
};

export type ItineraryPost = {
  content: string;
  alter: number;
  last_message?: string | null;
};

export type Message = {
  content: string;
  role: string;
};

export type ItineraryPostResponse = {
  message: Message;
  success: boolean;
};

export type ItineraryDefaultResponse = {
  message: string;
  success: boolean;
};

export type SaveItinerary = {
  user_id?: string;
  itinerary_data: string;
};
