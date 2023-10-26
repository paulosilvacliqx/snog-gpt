import styled, { keyframes } from "styled-components";

import Background from "../assets/background-v2-step1.svg";

const fadeInButton = keyframes`
  0% {
    opacity: 0;
    bottom: 0;
  }
  100% {
    display: block;
    bottom: 30px;
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-image: url(${Background});
  width: 100%;
  height: 100vh;
  background-color: #f5efe2;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

export const Title = styled.h1`
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  color: #2b0e03;
  margin-top: 60px;
`;

export const SubTitle = styled.h4`
  color: #2b0e03;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Inter";
`;

export const TravelMovie = styled.section<{
  height: number;
}>`
  height: ${({ height }) => height}px;
  width: 0;
  z-index: 30;
  position: relative;
  visibility: hidden;
  align-items: center;
  justify-content: left;
  transition: visibility 0.2s linear, width 0.2s linear;
  margin-right: 10px;

  video {
    object-fit: cover;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }

  ${"@media only screen and (max-width:1599px)"} {
    height: ${({ height }) => height - 185}px;
  }
`;

export const BackgroundShadow = styled.div`
  position: absolute;
  width: 101px;
  z-index: 10;

  ${"@media only screen and (max-width:1599px)"} {
    width: 50px;
    bottom: -80px;

    svg {
      width: 50px;
    }
  }
`;

export const Bar = styled.div<{ height: number; backgroundImage: any }>`
  display: flex;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  width: 80px;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height}px;

  background-color: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 59.18%
  );

  ${"@media only screen and (max-width:1599px)"} {
    height: ${({ height }) => height - 185}px;
    background-size: contain;
    background-position: center;
    width: 50px;
  }
`;

export const Label = styled.span`
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.24em;
  color: #ffffff;
  transform: rotate(-90deg);
  text-wrap: nowrap;
  z-index: 20;

  ${"@media only screen and (max-width:1599px)"} {
    font-size: 18px;
  }
`;

export const WrapperLabelVideo = styled.div`
  position: absolute;
  width: 80px;
  bottom: 100px;
  transition: left 0.3s linear;

  ${"@media only screen and (max-width:1599px)"} {
    bottom: 75px;
  }
`;

export const LabelVideo = styled.div`
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.04em;
  color: #ffffff;
  transform: rotate(-90deg);
  transition: transform 0.3s linear;
  text-wrap: nowrap;
  z-index: 20;

  ${"@media only screen and (max-width:1599px)"} {
    font-size: 18px;
  }
`;

export const Action = styled.div`
  position: absolute;
  display: none;
  left: 212px;

  ${"@media only screen and (max-width:1599px)"} {
    left: 88px;
  }
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 56px;
  border: 2px solid #ffffff;
  background: #ffffff;
  border-radius: 8px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  color: #3b3b3b;

  ${"@media only screen and (max-width:1599px)"} {
    width: 130px;
    height: 36px;
  }

  :hover {
    border: 2px solid #1c1c1c;
    background: #1c1c1c;
    color: #ffffff;
  }
`;

const sanitizeLabelVideo = (left: number) => {
  if (left === 185) {
    return left - 106;
  }
  if (left === 160) {
    return left - 100;
  }
  if (left === 250) {
    return left - 130;
  }
  if (left === 230) {
    return left - 125;
  }
  return left - 120;
};

export const WrapperBarCustom = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  min-width: 80px;
  z-index: 50;
  ${"@media only screen and (max-width:1599px)"} {
    min-width: 50px;
  }
`;

export const WrapperBar = styled.div<{ left: number }>`
  cursor: pointer;
  position: relative;
  display: flex;
  min-width: 80px;
  z-index: 50;
  ${"@media only screen and (max-width:1599px)"} {
    min-width: 50px;
  }

  :hover {
    ${TravelMovie} {
      visibility: visible;
      width: 625px;

      ${"@media only screen and (max-width:1599px)"} {
        width: 300px;
      }
    }

    ${LabelVideo} {
      transform: rotate(0);
    }

    ${WrapperLabelVideo} {
      left: ${({ left }) => left}px;

      ${"@media only screen and (max-width:1599px)"} {
        left: ${({ left }) => sanitizeLabelVideo(left)}px;
      }
    }

    ${Bar} {
      display: none;
    }

    ${Action} {
      animation: 0.5s ${fadeInButton} forwards;
      display: block;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  ${Bar} {
    margin-right: 10px;

    ${"@media only screen and (max-width:1599px)"} {
      margin-right: 10px;
    }
  }
`;
