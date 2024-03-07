import { useState, FC } from "react";
import * as S from "./Mobile.styles";
import { Modal } from "./Modal";
import btn0 from "./images/btn0.png";
import btn1 from "./images/btn1.png";
import btn2 from "./images/btn2.png";
import btn3 from "./images/btn3.png";

type BarList = {
  id: number;
  label: string;
  image: string;
};

const barList: BarList[] = [
  {
    id: 1,
    label: "SOZINHO",
    image: btn0,
  },
  {
    id: 2,
    label: "CASAL",
    image: btn1,
  },
  {
    id: 3,
    label: "FAMÍLIA",
    image: btn2,
  },
  {
    id: 4,
    label: "AMIGOS",
    image: btn3,
  },
];

export const MobileItems: FC<{ onSelected: (step: string) => void }> = ({
  onSelected,
}) => {
  const [selectedItem, setSelectedItem] = useState<BarList | null>(null);

  const handleSelected = () => {
    if (selectedItem) {
      onSelected(selectedItem.label);
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
