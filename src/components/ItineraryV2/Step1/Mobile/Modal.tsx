import { FC } from "react";
import { X } from "phosphor-react";

import * as S from "./Mobile.styles";
import Movie2 from "../../assets/movie/step1/movie-2.mov";
import Movie3 from "../../assets/movie/step1/movie-3.mov";
import Movie4 from "../../assets/movie/step1/movie-4.mov";
import Movie5 from "../../assets/movie/step1/movie-5.mov";
import Movie6 from "../../assets/movie/step1/movie-6.mov";
import Movie7 from "../../assets/movie/step1/movie-7.mov";
import Movie8 from "../../assets/movie/step1/movie-8.mov";
import Movie9 from "../../assets/movie/step1/movie-9.mov";

type Props = {
  label: string;
  id: number;
  onClose: () => void;
  onSelected: () => void;
};

const travelMovie: any = {
  1: Movie2,
  2: Movie3,
  3: Movie4,
  4: Movie5,
  5: Movie6,
  6: Movie7,
  7: Movie8,
  8: Movie9,
};

const colorIcon: any = {
  1: "#fff",
  2: "#000",
  3: "#fff",
  4: "#fff",
  5: "#000",
  6: "#fff",
  7: "#fff",
  8: "#fff",
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
