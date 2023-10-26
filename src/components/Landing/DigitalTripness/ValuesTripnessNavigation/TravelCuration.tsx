import { useContext } from 'react';
import { ValuesTripnessContext } from '../../../../contexts/ContextsFiles/ValuesTripnessContext';
import { TravelCurationIcon } from '../../../../assets/icons/travelCurationIcon';
import clsx from 'clsx';

export function TravelCuration() {
  const { travelCuration, setTrips, setDestiny, setTravelCuration, setRoutes, setGoodTalk } = useContext(ValuesTripnessContext);

  function handleTravelCurationDescription() {
    setTravelCuration(true);
    setDestiny(false);
    setTrips(false);
    setRoutes(false);
    setGoodTalk(false);
  }

  return (
    <div onClick={handleTravelCurationDescription} className={
      clsx("w-24 h-24 border-4 border-GL300 flex items-center mr-32 justify-center cursor-pointer transition-colors duration-700", {
        'bg-GL300': travelCuration
      })
    }>
      <TravelCurationIcon />
    </div>
  );
}