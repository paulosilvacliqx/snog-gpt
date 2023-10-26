import React, { createContext, useState } from 'react';

interface ExperienceItemProps {
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

interface ExperienceListProps {
  experienceItem: ExperienceItemProps[];
  setExperienceItem: React.Dispatch<React.SetStateAction<ExperienceItemProps[]>>
}

// Create Context
export const ExperienceListContext = createContext<ExperienceListProps>({} as ExperienceListProps);

// Create Provider
export const ExperienceListProvider = (props: any) => {
  const [experienceItem, setExperienceItem] = useState<ExperienceItemProps[]>([])


  return (
    <ExperienceListContext.Provider value={{
      experienceItem, setExperienceItem
    }}>
      {props.children}
    </ExperienceListContext.Provider>
  )
}