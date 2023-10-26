import { useContext } from 'react';
import { ValuesTripnessContext } from '../../../../contexts/ContextsFiles/ValuesTripnessContext';
import { GoodTalkIcon } from '../../../../assets/icons/goodTalkIcon';
import clsx from 'clsx';

export function GoodTalk() {
  const { goodTalk, setTrips, setDestiny, setTravelCuration, setRoutes, setGoodTalk } = useContext(ValuesTripnessContext);

  function handleGoodTalkDescription() {
    setDestiny(false);
    setTrips(false);
    setTravelCuration(false);
    setRoutes(false);
    setGoodTalk(true);
  }

  return (
    <div onClick={handleGoodTalkDescription} className={
      clsx("w-24 h-24 border-4 border-GL300 flex mr-32 items-center justify-center cursor-pointer transition-colors duration-700", {
        'bg-GL300': goodTalk
      })
    }>
      <GoodTalkIcon />
    </div>
  );
}