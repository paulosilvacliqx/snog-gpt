import { useState, FC } from "react";
import * as S from "./Mobile.styles";
import { Modal } from "./Modal";
import btn0 from "./images/btn0.png";
import btn1 from "./images/btn1.png";
import btn2 from "./images/btn2.png";
import btn3 from "./images/btn3.png";
import btn4 from "./images/btn4.png";
import btn5 from "./images/btn5.png";
import btn6 from "./images/btn6.png";
import btn7 from "./images/btn7.png";

type BarList = {
  id: number;
  label: string;
  image: string;
  step1: string;
};

const barList: BarList[] = [
  {
    id: 1,
    label: "AGITAÇÃO",
    image: btn0,
    step1: "Um lugar que tenha agitação",
  },
  {
    id: 2,
    label: "TRANQUILIDADE",
    image: btn1,
    step1: "Um lugar que tenha tranquilidade",
  },
  {
    id: 3,
    label: "ACAMPAR",
    image: btn2,
    step1: "Para acampar",
  },
  {
    id: 4,
    label: "VERÃO",
    image: btn3,
    step1: "Com clima de verão",
  },
  {
    id: 5,
    label: "INVERNO",
    image: btn4,
    step1: "Com clima de inverno",
  },
  {
    id: 6,
    label: "ROMANCE",
    image: btn5,
    step1: "Com clima de romance",
  },
  {
    id: 7,
    label: "HISTÓRIA",
    image: btn6,
    step1: "para conhecer partes históricas",
  },
  {
    id: 8,
    label: "PARQUES",
    image: btn7,
    step1: "para conhecer os melhores parques de diversão",
  },
];

export const MobileItems: FC<{ onSelected: (step: string) => void }> = ({
  onSelected,
}) => {
  const [selectedItem, setSelectedItem] = useState<BarList | null>(null);

  const handleSelected = () => {
    if (selectedItem) {
      onSelected(selectedItem.step1);
      setSelectedItem(null);
    }
  };
  return (
    <S.Wrapper>
      {!selectedItem &&
        barList.map((item) => (
          <S.WrapperButton
            key={item.id}
            onClick={() => {
              setSelectedItem(item);
            }}
          >
            <S.ItemButton backgroundImage={item.image} />
            <div id="label">{item.label}</div>
            <S.Gradient />
          </S.WrapperButton>
        ))}
      {selectedItem && (
        <Modal
          id={selectedItem.id}
          label={selectedItem.label}
          onClose={() => setSelectedItem(null)}
          onSelected={handleSelected}
        />
      )}
    </S.Wrapper>
  );
};
