import styled from "styled-components";

export const CarouselWrapper = styled.main`
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6rem;
  background: #eeecf4;

  .carousel.carousel-slider li.slide.selected {
    z-index: 0 !important;
  }
`;
