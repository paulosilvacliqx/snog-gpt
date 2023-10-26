import { Carousel } from "react-responsive-carousel";
import { FirstSlide } from "./CarouselSlides/FirstSlide";
import { SecondSlide } from "./CarouselSlides/SecondSlide";
import { ThirdSlide } from "./CarouselSlides/ThirdSlide";
import { FourthSlide } from "./CarouselSlides/FourthSlide";
import { FifthSlide } from "./CarouselSlides/FifthSlide";
import { SixthSlide } from "./CarouselSlides/SixthSlide";
import { CarouselWrapper } from "./CarouselStyled";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarouselLanding() {
  return (
    <CarouselWrapper>
      <Carousel
        className="w-1200 h-[700px] transition ease-in-out duration-700"
        dynamicHeight={true}
        transitionTime={500}
        interval={10000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        animationHandler="fade"
        swipeable={false}
        autoPlay={true}
        showIndicators={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            width: "16px",
            height: "16px",
            borderRadius: "20px",
            background: "#FFFF",
            display: "inline-flex",
            transition: "all ease-in-out 200ms",
            marginLeft: 10,
            cursor: "pointer",
          };
          const style = isSelected
            ? { ...defStyle, width: "12.375rem" }
            : { ...defStyle };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
            />
          );
        }}
      >
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
        <FourthSlide />
        <FifthSlide />
        <SixthSlide />
      </Carousel>
    </CarouselWrapper>
  );
}
