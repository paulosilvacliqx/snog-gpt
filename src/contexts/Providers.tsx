import { App } from "../App";
import { ItineraryProvider } from "./ContextsFiles/Itinerary";

export function Providers() {
  return (
    <ItineraryProvider>
      <App />
    </ItineraryProvider>
  );
}
