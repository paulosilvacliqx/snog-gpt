import { useContext, FC, useState } from "react";
import { forEach } from "lodash";
import { useNavigate } from "react-router-dom";

import { ItineraryContext } from "../../../../contexts/ContextsFiles/Itinerary";

import Tg1 from "./images/tg1.png";
import Tg2 from "./images/tg2.png";
import Tg3 from "./images/tg3.png";
import Tg4 from "./images/tg4.png";
import Tg5 from "./images/tg5.png";
import Tg6 from "./images/tg6.png";
import Tg7 from "./images/tg7.png";
import Tg8 from "./images/tg8.png";
import Tg9 from "./images/tg9.png";
import Tg10 from "./images/tg10.png";
import Tg11 from "./images/tg11.png";
import Tg12 from "./images/tg12.png";
import Tg13 from "./images/tg13.png";
import Tg14 from "./images/tg14.png";
import Tg15 from "./images/tg15.png";
import Tg1Selected from "./images/tg1selected.png";
import Tg2Selected from "./images/tg2selected.png";
import Tg3Selected from "./images/tg3selected.png";
import Tg4Selected from "./images/tg4selected.png";
import Tg5Selected from "./images/tg5selected.png";
import Tg6Selected from "./images/tg6selected.png";
import Tg7Selected from "./images/tg7selected.png";
import Tg8Selected from "./images/tg8selected.png";
import Tg9Selected from "./images/tg9selected.png";
import Tg10Selected from "./images/tg10selected.png";
import Tg11Selected from "./images/tg11selected.png";
import Tg12Selected from "./images/tg12selected.png";
import Tg13Selected from "./images/tg13selected.png";
import Tg14Selected from "./images/tg14selected.png";
import Tg15Selected from "./images/tg15selected.png";

import * as Styles from "./Mobile.styles";

const tangramList: any = [
  {
    id: 1,
    label: "DESIGN",
    image: Tg1,
    imageSelected: Tg1Selected,
    selectedColor: "#FF4B64",
  },
  {
    id: 2,
    label: "ARTE",
    image: Tg2,
    imageSelected: Tg2Selected,
    selectedColor: "#FF4B64",
  },
  {
    id: 3,
    label: "MODA",
    image: Tg3,

    imageSelected: Tg3Selected,
    selectedColor: "#FF4B64",
  },
  {
    id: 4,
    label: "EMPREENDER",
    image: Tg4,

    imageSelected: Tg4Selected,
    selectedColor: "#4090FF",
  },
  {
    id: 5,
    label: "INOVAÇÃO",
    image: Tg5,

    imageSelected: Tg5Selected,
    selectedColor: "#4090FF",
  },
  {
    id: 6,
    label: "TECNOLOGIA",
    image: Tg6,

    imageSelected: Tg6Selected,
    selectedColor: "#4090FF",
  },
  {
    id: 7,
    label: "NATUREZA",
    image: Tg7,

    imageSelected: Tg7Selected,
    selectedColor: "#9EC245",
  },
  {
    id: 8,
    label: "FOTOGRAFIA",
    image: Tg8,

    imageSelected: Tg8Selected,
    selectedColor: "#9EC245",
  },
  {
    id: 9,
    label: "AVENTURA",
    image: Tg9,

    imageSelected: Tg9Selected,
    selectedColor: "#9EC245",
  },
  {
    id: 10,
    label: "MÚSICA",
    image: Tg10,
    imageSelected: Tg10Selected,
    selectedColor: "#F66543",
  },
  {
    id: 11,
    label: "GASTRONOMIA",
    image: Tg11,
    imageSelected: Tg11Selected,
    selectedColor: "#F66543",
  },
  {
    id: 12,
    label: "CULTURA",
    image: Tg12,
    imageSelected: Tg12Selected,
    selectedColor: "#F66543",
  },
  {
    id: 13,
    label: "FÉ",
    image: Tg13,
    imageSelected: Tg13Selected,
    selectedColor: "#FFA046",
  },
  {
    id: 14,
    label: "ESPIRITUALIDADE",
    image: Tg14,
    imageSelected: Tg14Selected,
    selectedColor: "#FFA046",
  },
  {
    id: 15,
    label: "VOLUNTARIADO",
    image: Tg15,
    imageSelected: Tg15Selected,
    selectedColor: "#FFA046",
  },
];

export const MobileItems: FC = () => {
  const navigate = useNavigate();
  const { itineraryData, setItineraryData } = useContext(ItineraryContext);

  const [tangramSelecteds, setTangramSelecteds] = useState<any>([]);
  const checkSelected = (selected: boolean | undefined) => {
    const tangramSelected: [] = tangramSelecteds.filter(
      (selected: boolean) => selected
    );

    if (tangramSelected.length < 5) {
      if (selected === undefined) {
        return true;
      } else {
        return selected;
      }
    }

    if (selected === undefined) {
      return false;
    }

    return false;
  };

  const handleClick = (selectedIdx: number) => {
    const newTangramSelecteds = [...tangramSelecteds];
    newTangramSelecteds[selectedIdx] =
      newTangramSelecteds[selectedIdx] === undefined
        ? checkSelected(undefined)
        : checkSelected(!newTangramSelecteds[selectedIdx]);
    setTangramSelecteds(newTangramSelecteds);
  };

  const isDisabled = () => {
    const tangramSelected: [] = tangramSelecteds.filter(
      (selected: boolean) => selected
    );
    return tangramSelected.length < 3;
  };

  const handNextStep = () => {
    let step4: any = "";

    forEach(tangramSelecteds, (item: boolean, key: string) => {
      if (item === true) {
        const label = tangramList[key].label;
        step4 = step4 ? step4 + `, ${label}` : label;
      }
    });

    setItineraryData({
      ...itineraryData,
      content: `${itineraryData.content} Combine estes termos e personalize uma experiência inesquecível. Que contenham: ${step4}`,
    });
    navigate("/roteiro/loading");
  };

  return (
    <Styles.Wrapper>
      <Styles.WrapperButton>
        {tangramList.map((item: any, idx: any) => (
          <Styles.Button
            color={tangramSelecteds[idx] ? item.selectedColor : "transparent"}
            key={item.id}
            onClick={() => handleClick(idx)}
          >
            <img
              src={tangramSelecteds[idx] ? item.imageSelected : item.image}
              alt="img"
            ></img>
            <span>{item.label}</span>
          </Styles.Button>
        ))}
      </Styles.WrapperButton>
      <Styles.SelectedButton onClick={handNextStep} disabled={isDisabled()}>
        Criar roteiro inteligente
      </Styles.SelectedButton>
    </Styles.Wrapper>
  );
};
