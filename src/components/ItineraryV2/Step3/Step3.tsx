import { useNavigate } from "react-router-dom";

import * as Styles from "./Step3.styles";
import { Header } from "../Header/Header";
import Box1 from "../assets/box/box-1.svg";
import Box2 from "../assets/box/box-2.svg";
import Box3 from "../assets/box/box-3.svg";
import Box4 from "../assets/box/box-4.svg";

import Movie1 from "../assets/movie/step3/movie-1.mov";
import Movie2 from "../assets/movie/step3/movie-2.mov";
import Movie3 from "../assets/movie/step3/movie-3.mov";
import Movie4 from "../assets/movie/step3/movie-4.mov";
import { useContext, useEffect } from "react";
import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";
import { MobileItems } from "./Mobile/Items";

const barImage: any = {
  0: Box1,
  1: Box2,
  2: Box3,
  3: Box4,
};

const movie: any = {
  0: Movie1,
  1: Movie2,
  2: Movie3,
  3: Movie4,
};

type ItemProps = {
  label: string;
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  barImageIdx: number;
  movieIdx: number;
};

export const Step3 = () => {
  const navigate = useNavigate();
  const { itineraryData, setItineraryData } = useContext(ItineraryContext);

  const handleNextStep = (step3: string) => {
    setItineraryData({
      ...itineraryData,
      content: `${itineraryData.content} ${step3}.`,
    });
    navigate("/roteiro/passo-4");
  };

  useEffect(() => {
    if (!itineraryData.content) {
      navigate("/");
    }
  }, []);

  const renderItem = ({
    label,
    flexDirection,
    barImageIdx,
    movieIdx,
  }: ItemProps) => (
    <Styles.Row style={{ flexDirection }}>
      <Styles.BoxItem backgroundImage={barImage[barImageIdx]}>
        <Styles.Label>{label}</Styles.Label>
        <Styles.SelectButton onClick={() => handleNextStep(label)}>
          Selecionar
        </Styles.SelectButton>
        <video autoPlay muted loop id="myVideo">
          <source src={movie[movieIdx]} type="video/mp4" />
        </video>
        <Styles.Background />
      </Styles.BoxItem>
    </Styles.Row>
  );
  return (
    <Styles.Container>
      <Header
        handleBack={() => navigate("/roteiro/passo-2")}
        btnLabel="Voltar"
      />
      <Styles.Title>AGORA</Styles.Title>
      <Styles.SubTitle>Com quem você irá viajar?</Styles.SubTitle>
      <Styles.Content>
        <Styles.Column>
          {renderItem({
            label: "SOZINHO",
            flexDirection: "row-reverse",
            barImageIdx: 0,
            movieIdx: 0,
          })}
          {renderItem({
            label: "CASAL",
            flexDirection: "row-reverse",
            barImageIdx: 2,
            movieIdx: 1,
          })}
        </Styles.Column>
        <Styles.Row>
          <Styles.Column>
            {renderItem({
              label: "FAMÍLIA",
              flexDirection: "row",
              barImageIdx: 1,
              movieIdx: 2,
            })}
            {renderItem({
              label: "AMIGOS",
              flexDirection: "row",
              barImageIdx: 3,
              movieIdx: 3,
            })}
          </Styles.Column>
        </Styles.Row>
      </Styles.Content>
      <MobileItems onSelected={handleNextStep} />
    </Styles.Container>
  );
};
