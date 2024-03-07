import { FC } from "react";
import { X } from "phosphor-react";

import * as S from "./Mobile.styles";
import Movie1 from "../../assets/movie/step3/movie-1.mov";
import Movie2 from "../../assets/movie/step3/movie-2.mov";
import Movie3 from "../../assets/movie/step3/movie-3.mov";
import Movie4 from "../../assets/movie/step3/movie-4.mov";

type Props = {
  label: string;
  id: number;
  onClose: () => void;
  onSelected: () => void;
};

const travelMovie: any = {
  1: Movie1,
  2: Movie2,
  3: Movie3,
  4: Movie4,
};

const colorIcon: any = {
  1: "#000",
  2: "#fff",
  3: "#fff",
  4: "#000",
};

export const Modal: FC<Props> = ({ label, id, onClose, onSelected }) => {
  const handleCloseModal = () => {
    onClose();
  };

  const handleSelected = () => {
    onSelected();
  };

  return (
    <S.WrapperModal>
      <S.CloseButton>
        <X
          size={24}
          weight="bold"
          color={colorIcon[id]}
          style={{ zIndex: 9999 }}
          aria-label="Fechar"
          onClick={handleCloseModal}
        />
      </S.CloseButton>
      <S.TravelMovie>
        <video autoPlay muted loop id="myVideo">
          <source src={travelMovie[id]} type="video/mp4" />
        </video>
      </S.TravelMovie>
      <S.Footer>
        <span>{label}</span>
        <button onClick={handleSelected}>Selecionar</button>
      </S.Footer>
    </S.WrapperModal>
  );
};
