import React, { createContext, useState } from 'react';

export interface DataTangran {
  img_tangram_item_path: string;
  tangram_group_color: string;
  tangram_item_id: number;
  tangram_item_name: string;
}

export interface TangranProps {
  selectedWords: number[]; 
  setSelectedWords: React.Dispatch<React.SetStateAction<number[]>>;
  wordValues: string[]; 
  setWordValues: React.Dispatch<React.SetStateAction<string[]>>;
  dataTangran: DataTangran[]; 
  setDataTangran: React.Dispatch<React.SetStateAction<DataTangran[]>>;
  newSelectedValue: number[];
  newSelectedWordValues: string[];
}

// Create Context
export const TangranContext = createContext<TangranProps>({} as TangranProps);

// Create Provider
export const TangranProvider = (props: any) => {
  const [dataTangran, setDataTangran] = useState<DataTangran[]>([])
  const [selectedWords, setSelectedWords] = useState<number[]>([]);
  const [wordValues, setWordValues] = useState<string[]>([]);
  const newSelectedValue = [...selectedWords]
  const newSelectedWordValues = [...wordValues]

  return (
    <TangranContext.Provider value={{
      selectedWords, setSelectedWords,
      wordValues, setWordValues,
      newSelectedValue,
      newSelectedWordValues,
      dataTangran, setDataTangran
    }}>
      {props.children}
    </TangranContext.Provider>
  )
}