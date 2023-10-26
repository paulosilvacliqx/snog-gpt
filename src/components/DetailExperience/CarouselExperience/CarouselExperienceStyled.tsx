import styled from "styled-components";

export const DetailExperienceCarouselWrapper = styled.main`
  width: 100%;
  /* height: 62.2rem; */
  background: #EEECF4;
  padding-left: 5rem;
  padding-right: 7rem;

  .carousel .thumbs-wrapper {
    margin-top: 1.5rem;
    margin-left: 0;
  }

  .thumb.selected, .carousel .thumb:hover {
    border: 3px solid #543F92;
  }

  .carousel {
    width: 39.5rem;
  }

  .carousel .thumb {
    margin-right: 1.8rem;

    img {
      width: 6.25rem;
      height: 5rem;
    }
  }
`;