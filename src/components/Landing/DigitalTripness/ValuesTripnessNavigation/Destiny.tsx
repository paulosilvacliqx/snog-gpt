import { useContext } from 'react';
import { ValuesTripnessContext } from '../../../../contexts/ContextsFiles/ValuesTripnessContext';
import { DestinyIcon } from '../../../../assets/icons/destinyIcon';
import clsx from 'clsx';

export function Destiny() {
  const { destiny, setTrips, setDestiny, setTravelCuration, setRoutes, setGoodTalk } = useContext(ValuesTripnessContext);

  function handleDestinyDescription() {
    setDestiny(true);
    setTrips(false);
    setTravelCuration(false);
    setRoutes(false); 
    setGoodTalk(false);
  }

  return (
    <div onClick={handleDestinyDescription} className={
      clsx("w-24 h-24 border-4 border-GL300 flex mr-32 items-center justify-center cursor-pointer transition-colors duration-700", {
        'bg-GL300': destiny
      })
    }>
      <DestinyIcon />
    </div>
  );
}