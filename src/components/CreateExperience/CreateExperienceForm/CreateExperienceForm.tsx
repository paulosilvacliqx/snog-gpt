import { useContext, useState, useEffect } from 'react';
import { Check } from 'phosphor-react';
import { Button } from '../../Button/Button';
import { Input } from "../../Input/Input";
import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from "clsx";
import { CreateExperienceContext } from '../../../contexts/ContextsFiles/CreateExperience';

export function CreateExperienceForm() {
  const {
    name, destiny, description, roadMap, value,
    setName, setDestiny, setDescription, setRoadMap, setValue
  } = useContext(CreateExperienceContext)
  const [checked, setChecked] = useState<Checkbox.CheckedState>();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if ((name !== '') && (destiny !== '') && (description !== '') && (roadMap !== '') && (value !== '') && (checked)) {
      setDisabled(!disabled)
    } else {
      setDisabled(true);
    }
  }, [name, destiny, description, roadMap, value, checked])

  return (
    <>
      <Input
        className={
          clsx('w-120 h-12 mt-6 autofill:bg-P300 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none', {
            'bg-P300 text-white': name !== ''
          })
        }
        placeholder="Nome da Experiência"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        className={
          clsx('w-120 h-12 mt-6 autofill:bg-P300 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none', {
            'bg-P300 text-white': destiny !== ''
          })
        }
        placeholder="Destino"
        type="text"
        value={destiny}
        onChange={(e) => setDestiny(e.target.value)}
      />

      <textarea
        className={
          clsx('w-120 h-28 mt-6 pt-1 resize-none autofill:bg-P300 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none', {
            'bg-P300 text-white': description !== ''
          })
        }
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <textarea
        className={
          clsx('w-120 h-28 mt-6 pt-1 resize-none autofill:bg-P300 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none', {
            'bg-P300 text-white': roadMap !== ''
          })
        }
        placeholder="Roteiro"
        value={roadMap}
        onChange={(e) => setRoadMap(e.target.value)}
      />

      <Input
        className={
          clsx('w-120 h-12 mt-6 autofill:bg-P300 font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none', {
            'bg-P300 text-white': value !== ''
          })
        }
        placeholder="Valor Estimado"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="flex flex-row items-center mr-56 mt-6">
        <Checkbox.Root
          className="flex items-center gap-3 group mr-2 focus:outline-none"
          checked={checked}
          onCheckedChange={(checked: Checkbox.CheckedState) => setChecked(checked)}
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white border-2 group-data-[state=checked]:bg-P300 transition-colors duration-300">
            <Checkbox.Indicator>
              <Check size={16} className="text-white" />
            </Checkbox.Indicator>
          </div>

        </Checkbox.Root>
        <p className="font-normal text-lg text-black">Concordo com os <span className="font-bold text-lg text-GL300">Termos e Condições</span></p>
      </div>

      <Button
        title={"Enviar para Análise"}
        className={
          clsx("w-120 h-14 mt-8 font-medium text-base text-white flex items-center justify-center rounded-full bg-GL300 transition-colors duration-700", {
            "bg-P10 text-P200 cursor-not-allowed": disabled
          })
        }
      />
    </>
  );
}