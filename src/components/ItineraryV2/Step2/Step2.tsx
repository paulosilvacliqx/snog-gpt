import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { uniqueId } from "lodash";
import { Button } from "../Button/Button";
import * as Styles from "./Step2.styles";
import { Header } from "../Header/Header";
import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";

export const Step2 = () => {
  const navigate = useNavigate();
  const { itineraryData, setItineraryData } = useContext(ItineraryContext);
  const [selectedDay, setSelectedDay] = useState(1);

  const [] = useState();
  const dayNumberList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const sanitizeNumber = (value: number) => (value < 10 ? `0${value}` : value);

  const pointerPreviewList = (idxParam: number, totalPrevious: number) => {
    if (idxParam - totalPrevious < 0) {
      return dayNumberList[dayNumberList.length - totalPrevious];
    }
    return sanitizeNumber(idxParam - totalPrevious || 30);
  };

  const pointerNextList = (idxParam: number, totalPrevious: number) => {
    if (idxParam + totalPrevious > 30) {
      return sanitizeNumber(idxParam + totalPrevious - 30);
    }
    return sanitizeNumber(idxParam + totalPrevious);
  };

  const handleNextStep = () => {
    setItineraryData({
      ...itineraryData,
      alter: 0,
      content: `${itineraryData.content}, com duração de ${selectedDay} dias.`,
      last_message: null,
    });
    navigate("/roteiro/passo-3");
  };

  const handleChange = (value: number) => {
    setSelectedDay(value + 1);
  };

  useEffect(() => {
    if (!itineraryData.content) {
      navigate("/");
    }
  }, []);

  return (
    <Styles.Container>
      <div>
        <Header
          handleBack={() => navigate("/roteiro/local")}
          btnLabel="Voltar"
        />
        <Styles.Title>CONTE A DURAÇÃO</Styles.Title>
        <Styles.SubTitle>Por quanto tempo você deseja viajar?</Styles.SubTitle>
        <Styles.Content>
          <Carousel
            axis="vertical"
            swipeable
            emulateTouch
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop
            centerMode
            centerSlidePercentage={50}
            onChange={handleChange}
          >
            {dayNumberList.map((item, idx) => (
              <Styles.WrapperSlideItem key={uniqueId()}>
                <Styles.SlideItem style={{ fontSize: 32, opacity: 0.1 }}>
                  {pointerPreviewList(idx + 1, 3)}
                </Styles.SlideItem>
                <Styles.SlideItem style={{ fontSize: 32, opacity: 0.4 }}>
                  {pointerPreviewList(idx + 1, 2)}
                </Styles.SlideItem>
                <Styles.SlideItem style={{ fontSize: 32, opacity: 0.6 }}>
                  {pointerPreviewList(idx + 1, 1)}
                </Styles.SlideItem>
                <Styles.SlideItem style={{ margin: "15px 0" }}>
                  {`${item < 10 ? `0${item}` : item} dias`}
                </Styles.SlideItem>
                <Styles.SlideItem style={{ fontSize: 32, opacity: 0.6 }}>
                  {pointerNextList(idx + 1, 1)}
                </Styles.SlideItem>
                <Styles.SlideItem style={{ fontSize: 32, opacity: 0.4 }}>
                  {pointerNextList(idx + 1, 2)}
                </Styles.SlideItem>
                <Styles.SlideItem style={{ fontSize: 32, opacity: 0.1 }}>
                  {pointerNextList(idx + 1, 3)}
                </Styles.SlideItem>
              </Styles.WrapperSlideItem>
            ))}
          </Carousel>
        </Styles.Content>
      </div>
      <Styles.Action>
        <Button onClick={() => handleNextStep()}>Continuar</Button>
      </Styles.Action>
    </Styles.Container>
  );
};
