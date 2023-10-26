import { get, post } from "../apis";
import { logout } from "../auth";
import {
  ItineraryResponse,
  ItineraryByIdResponse,
  Response,
  Itinerary,
  ItineraryPost,
  ItineraryPostResponse,
  ItineraryDefaultResponse,
  SaveItinerary,
} from "./type";

export const getAllItinerariesFromUserToken = async () => {
  try {
    const { data }: Response<ItineraryResponse> = await get({
      url: "/user/itinerary/",
    });
    return data.itineraries;
  } catch (error: any) {
    if (error?.response?.status === 403) {
      logout();
    }
    return [];
  }
};

export const getItineraryById = async (
  itineraryId: string
): Promise<null | Itinerary> => {
  try {
    const { data }: Response<ItineraryByIdResponse> = await get({
      url: `/itinerary/${itineraryId}`,
    });
    return data.itinerary;
  } catch (error: any) {
    if (error?.response?.status === 403) {
      logout();
    }
    return null;
  }
};

export const changeItineraryStatus = async (
  itineraryId: number,
  newStatus: string
) => {
  try {
    const { data }: Response<ItineraryResponse> = await post({
      url: `/itinerary/status/${itineraryId}/${newStatus}`,
    });
    return true;
  } catch (error: any) {
    if (error?.response?.status === 403) {
      logout();
    }
    return false;
  }
};

export const postItinerary = async (itinerary: ItineraryPost) => {
  try {
    const { data }: Response<ItineraryPostResponse & ItineraryDefaultResponse> =
      await post({
        url: "/chatgpt_itinerary",
        data: itinerary,
      });
    return data;
  } catch (error: any) {
    if (error?.response?.status === 403) {
      logout();
    }
    return false;
  }
};

export const saveItineraryByUser = async (itinerary: SaveItinerary) => {
  try {
    const { data }: Response<ItineraryDefaultResponse> = await post({
      url: "/user/itinerary",
      data: itinerary,
    });
    return data;
  } catch (error: any) {
    if (error?.response?.status === 403) {
      logout();
    }
    return {
      success: false,
      message: "",
    };
  }
};
