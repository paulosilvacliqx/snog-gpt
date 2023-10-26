import { useContext } from 'react';
import { ValuesTripnessContext } from '../../../../contexts/ContextsFiles/ValuesTripnessContext';
import { UniqueRoutesIcon } from '../../../../assets/icons/uniqueRoutesIcon';
import clsx from 'clsx';

export function UniqueRoutes() {
  const { routes, setTrips, setDestiny, setTravelCuration, setRoutes, setGoodTalk } = useContext(ValuesTripnessContext);

  function handleUniqueRoutesDescription() {
    setRoutes(true);
    setTravelCuration(false);
    setDestiny(false);
    setTrips(false);
    setGoodTalk(false);
  }

  return (
    <div onClick={handleUniqueRoutesDescription} className={
      clsx("w-24 h-24 border-4 border-GL300 flex items-center mr-32 justify-center cursor-pointer transition-colors duration-700", {
        'bg-GL300': routes
      })
    }>
      <UniqueRoutesIcon />
    </div>
  );
}