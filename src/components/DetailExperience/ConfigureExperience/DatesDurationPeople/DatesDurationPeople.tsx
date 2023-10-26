import { useState } from 'react';
import { Button } from '../../../Button/Button';
import { ArrowRight } from 'phosphor-react';
import clsx from 'clsx';

export function DatesDurationPeople() {
  const [date, setDate] = useState(true)
  const [duration, setDuration] = useState(false)
  const [people, setPeople] = useState(false)

  return (
    <div>
      <h1 className="text-P300 text-3xl font-bold">CONHEÇA A CULTURA - PARIS</h1>

      <p className="text-B10 text-2xl font-normal mt-16">Configure</p>

      <div className="flex flex-row items-center mt-6 ml-10">
        <span className={
          clsx("text-xl text-P300 font-normal", {
            'text-P100': !date
          })
        }>Data</span>
        <div className={
          clsx('w-24 h-1 mx-4 mt-1 bg-P100 rounded-[10px]', {
            'bg-P300' : !date
          })
        } />
        <span className={
          clsx("text-xl text-P100 font-normal", {
            'text-P300': duration
          })
        }>Duração</span>
        <div className={
          clsx('w-24 h-1 mx-4 mt-1 bg-P100 rounded-[10px]', {
            'bg-P300': !duration
          })
        } />
        <span className={
          clsx("text-xl text-P100 font-normal", {
            'text-P300': people
          })
        }>Pessoas</span>
      </div>

      <div className="flex flex-row items-center mt-6">
        <Button
          title="20/04"
          className="w-32 h-[52px] mr-4 flex items-center justify-center rounded-2xl border border-P300 text-P300 font-bold"
        />
        <Button
          title="20/06"
          className="w-32 h-[52px] mr-4 flex items-center justify-center rounded-2xl border border-P300 text-P300 font-bold"
        />
        <Button
          title="20/08"
          className="w-32 h-[52px] mr-4 flex items-center justify-center rounded-2xl border border-P300 text-P300 font-bold"
        />
        <Button
          title="20/10"
          className="w-32 h-[52px] flex items-center justify-center rounded-2xl border border-P300 text-P300 font-bold"
        />
      </div>

      <div className="flex flex-row items-center mt-6 ml-56">
        <Button 
          title="Próximo"
          className="text-P100 flex items-center text-base font-bold"
          icon={<ArrowRight className="ml-2 mt-1" size={20} weight="bold" />}
        />
      </div>
    </div>
  );
}