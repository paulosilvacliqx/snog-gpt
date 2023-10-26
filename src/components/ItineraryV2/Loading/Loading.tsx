import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

import * as Styles from "./Loading.styles";
import { Header } from "../Header/Header";

import Tangram1 from "../assets/loading/tangram-1.png";
import Tangram2 from "../assets/loading/tangram-2.png";
import Tangram3 from "../assets/loading/tangram-3.png";
import Tangram4 from "../assets/loading/tangram-4.png";
import Tangram5 from "../assets/loading/tangram-5.png";
import Tangram6 from "../assets/loading/tangram-6.png";
import Tangram7 from "../assets/loading/tangram-7.png";
import Tangram8 from "../assets/loading/tangram-8.png";
import Tangram9 from "../assets/loading/tangram-9.png";
import Tangram10 from "../assets/loading/tangram-10.png";
import Tangram11 from "../assets/loading/tangram-11.png";
import Tangram12 from "../assets/loading/tangram-12.png";
import Tangram13 from "../assets/loading/tangram-13.png";
import Tangram14 from "../assets/loading/tangram-14.png";
import Tangram15 from "../assets/loading/tangram-15.png";

import { postItinerary } from "../../../services/Itineraries/service";
import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";
import { Button } from "../Button/Button";
import { ItineraryPost } from "../../../services/Itineraries/type";

export const Loading = () => {
  const images: any = [
    Tangram1,
    Tangram2,
    Tangram3,
    Tangram4,
    Tangram5,
    Tangram6,
    Tangram7,
    Tangram8,
    Tangram9,
    Tangram10,
    Tangram11,
    Tangram12,
    Tangram13,
    Tangram14,
    Tangram15,
  ];
  const navigate = useNavigate();
  const {
    itineraryData,
    itineraryDataResponse,
    setItineraryDataResponse,
    setItineraryData,
  } = useContext(ItineraryContext);

  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    counter < 15 &&
      setTimeout(() => setCounter(counter + 1 === 15 ? 0 : counter + 1), 400);
  }, [counter]);

  useEffect(() => {
    if (!itineraryData.content) {
      navigate("/");
    }
  }, []);

  const onPost = async () => {
    const response = await postItinerary(itineraryData);
    if (response === false) {
      setError(true);
      setItineraryDataResponse({
        message: {
          role: "",
          content: "",
        },
        success: false,
      });
      setItineraryData({} as ItineraryPost);
    } else {
      if (!isEmpty(response)) {
        if (itineraryData.alter === 1) {
          setItineraryDataResponse({
            success: true,
            message: {
              role: itineraryDataResponse.message.role,
              content: response.message,
            },
          });
        } else {
          setItineraryDataResponse(response);
        }
        navigate("/roteiro/resume");
      }
    }
  };

  useEffect(() => {
    if (!itineraryData.content) {
      navigate("/");
    }
    onPost();
  }, []);

  return (
    <Styles.Container>
      <Header handleBack={() => {}} btnLabel="" />
      <Styles.Content>
        <Styles.Title>
          {(!error && (
            <>
              ESTAMOS CRIANDO A MELHOR <br />
              EXPERIÊNCIA PARA VOCÊ...
            </>
          )) || <>ERRO AO TENTAR REFAZER O ROTEIRO!</>}
        </Styles.Title>
        {(!error && (
          <Styles.LoadingWrapper>
            <img src={images[counter]} />
          </Styles.LoadingWrapper>
        )) || <Button onClick={() => navigate("/")}>Tentar Novamente</Button>}
      </Styles.Content>
    </Styles.Container>
  );
};
