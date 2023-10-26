import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { uniqueId } from "lodash";
import Bar2 from "../assets/bar/bar-2.svg";
import Bar3 from "../assets/bar/bar-3.svg";
import Bar4 from "../assets/bar/bar-4.svg";
import Bar5 from "../assets/bar/bar-5.svg";
import Bar6 from "../assets/bar/bar-6.svg";
import Bar7 from "../assets/bar/bar-7.svg";
import Bar8 from "../assets/bar/bar-8.svg";
import Bar9 from "../assets/bar/bar-9.svg";
import Movie2 from "../assets/movie/step1/movie-2.mov";
import Movie3 from "../assets/movie/step1/movie-3.mov";
import Movie4 from "../assets/movie/step1/movie-4.mov";
import Movie5 from "../assets/movie/step1/movie-5.mov";
import Movie6 from "../assets/movie/step1/movie-6.mov";
import Movie7 from "../assets/movie/step1/movie-7.mov";
import Movie8 from "../assets/movie/step1/movie-8.mov";
import Movie9 from "../assets/movie/step1/movie-9.mov";

import * as Styles from "./Step1.styles";
import { Header } from "../Header/Header";

import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";

const travelMovie: any = {
  0: Movie2,
  1: Movie3,
  2: Movie4,
  3: Movie5,
  4: Movie6,
  5: Movie7,
  6: Movie8,
  7: Movie9,
};

const barImage: any = {
  0: Bar2,
  1: Bar3,
  2: Bar4,
  3: Bar5,
  4: Bar6,
  5: Bar7,
  6: Bar8,
  7: Bar9,
};

const barList = [
  {
    label: "AGITAÇÃO",
    barHeight: 427,
    step1: "Um lugar que tenha agitação",
  },
  {
    label: "TRANQUILIDADE",
    barHeight: 450,
    step1: "Um lugar que tenha tranquilidade",
  },
  {
    label: "ACAMPAR",
    barHeight: 475,
    step1: "Para acampar",
  },
  {
    label: "VERÃO",
    barHeight: 500,
    step1: "Com clima de verão",
  },
  {
    label: "INVERNO",
    barHeight: 475,
    step1: "Com clima de inverno",
  },
  {
    label: "ROMANCE",
    barHeight: 450,
    step1: "Com clima de romance",
  },
  {
    label: "HISTÓRIA",
    barHeight: 427,
    step1: "para conhecer partes históricas",
  },
  {
    label: "PARQUES",
    barHeight: 406,
    step1: "para conhecer os melhores parques de diversão",
  },
];

const labelVideoPosition: any = {
  0: 220,
  1: 160,
  2: 220,
  3: 250,
  4: 230,
  5: 220,
  6: 225,
  7: 225,
};

const backgroundSvg = (height: number) => (
  <svg
    width="90"
    height={height + 2}
    viewBox="0 0 80 408"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="-119"
      y="-72.0625"
      width="244"
      height="553"
      fill="url(#paint0_linear_3373_2435)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3373_2435"
        x1="3"
        y1="480.938"
        x2="3"
        y2="-23.2684"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-opacity="0.8" />
        <stop offset="0.649059" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const Step1 = () => {
  const navigate = useNavigate();
  const { itineraryData, setItineraryData } = useContext(ItineraryContext);

  const handleNextStep = (step1: string) => {
    setItineraryData({
      ...itineraryData,
      content: `Atue como um agente de viagens e crie um roteiro de viagem, separe o roteiro por dias e os eventos por -, levando em consideração os seguintes termos: ${step1}.`,
    });
    navigate("/roteiro/local");
  };
  return (
    <Styles.Container>
      <Header handleBack={() => navigate("/")} btnLabel="Voltar" />
      <Styles.Title>PARA COMEÇAR</Styles.Title>
      <Styles.SubTitle>
        Para criar uma experiência personalizada, a IA precisa entender para
        <br />
        onde você deseja viajar
      </Styles.SubTitle>
      <Styles.Content>
        {barList.map((item, idx) => (
          <Styles.WrapperBar key={uniqueId()} left={labelVideoPosition[idx]}>
            <Styles.Bar height={item.barHeight} backgroundImage={barImage[idx]}>
              <Styles.Label>{item.label}</Styles.Label>
              <Styles.BackgroundShadow>
                {backgroundSvg(item.barHeight)}
              </Styles.BackgroundShadow>
            </Styles.Bar>
            <Styles.TravelMovie height={item.barHeight}>
              <video
                autoPlay
                muted
                loop
                id="myVideo"
                style={{ filter: "opacity(85%)" }}
              >
                <source src={travelMovie[idx]} type="video/mp4" />
              </video>
              <Styles.WrapperLabelVideo>
                <Styles.LabelVideo>{item.label}</Styles.LabelVideo>
              </Styles.WrapperLabelVideo>
              <Styles.Action>
                <Styles.SelectButton onClick={() => handleNextStep(item.step1)}>
                  Selecione
                </Styles.SelectButton>
              </Styles.Action>
            </Styles.TravelMovie>
          </Styles.WrapperBar>
        ))}
      </Styles.Content>
    </Styles.Container>
  );
};
