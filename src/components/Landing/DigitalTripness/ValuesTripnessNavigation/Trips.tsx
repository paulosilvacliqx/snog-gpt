import clsx from "clsx";
import { useContext } from "react";
import { VacationIcon } from "../../../../assets/icons/vacationIcon";
import { ValuesTripnessContext } from "../../../../contexts/ContextsFiles/ValuesTripnessContext";

export function Trips() {
  const { trips, setTrips, setDestiny, setTravelCuration, setRoutes, setGoodTalk } = useContext(ValuesTripnessContext);

  function handleTripsDescription() {
    setTrips(true);
    setDestiny(false);
    setTravelCuration(false);
    setRoutes(false);
    setGoodTalk(false);
  }

  return (
    <div onClick={handleTripsDescription} className={
      clsx("w-24 h-24 border-4 border-GL300 flex items-center justify-center cursor-pointer transition-colors duration-700", {
        'bg-GL300': trips
      })
    }>
      <VacationIcon />
    </div>
  );
}