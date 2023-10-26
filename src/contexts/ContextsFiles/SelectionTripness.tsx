import React, { createContext, DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';

export interface DataSelection {
  experience_id: number;
  experience_name: string;
  experience_short_description: string;
  value: number;
  active: boolean;
  tripness_selection: boolean;
  tangran_list: [{
    tangram_item_id: number;
    tangram_item_name: string;
    img_tangram_item_path: string;
    tangram_group_color: string;
  }]
}

interface TripnessSelectionProps {
  allSelection: DataSelection[];
  setAllSelection: React.Dispatch<React.SetStateAction<DataSelection[]>>
}

// Create Context
export const TripnessSelectionContext = createContext<TripnessSelectionProps>({} as TripnessSelectionProps);

// Create Provider
export const TripnessSelectionProvider = (props: any) => {
  const [allSelection, setAllSelection] = useState<DataSelection[]>([])

  return (
    <TripnessSelectionContext.Provider value={{
      allSelection, setAllSelection
    }}>
      {props.children}
    </TripnessSelectionContext.Provider>
  )
}