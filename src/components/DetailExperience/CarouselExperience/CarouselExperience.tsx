import { Carousel } from "react-responsive-carousel";
import { DetailExperienceCarouselWrapper } from "./CarouselExperienceStyled";
import imgCarousel from '../../../assets/imgs/img-carousel.png'

export function CarouselExperience() {
  return (
    <DetailExperienceCarouselWrapper>
      <Carousel className="w-105" showArrows={false} showIndicators={false} showStatus={false}>
        <div>
          <img src={imgCarousel} alt="" />
        </div>
        <div>
          <img src={imgCarousel} alt="" />
        </div>
        <div>
          <img src={imgCarousel} alt="" />
        </div>
        <div>
          <img src={imgCarousel} alt="" />
        </div>
        <div>
          <img src={imgCarousel} alt="" />
        </div>
      </Carousel>
    </DetailExperienceCarouselWrapper>
  );
}