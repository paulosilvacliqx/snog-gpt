import styled from "styled-components";
import BackgroundImage from "../assets/background-v2-resume.svg";

import BackgroundDark from "../assets/resume/background.png";

import Image1Hover from "../assets/resume/image-1-hover.png";
import Image1 from "../assets/resume/image-1.png";

import Image2Hover from "../assets/resume/image-2-hover.png";
import Image2 from "../assets/resume/image-2.png";

import Image3Hover from "../assets/resume/image-3-hover.png";
import Image3 from "../assets/resume/image-3.png";

import Image4Hover from "../assets/resume/image-4-hover.png";
import Image4 from "../assets/resume/image-4.png";

import Image5Hover from "../assets/resume/image-5-hover.png";
import Image5 from "../assets/resume/image-5.png";

import Image6 from "../assets/resume/image-6.png";

import Image7 from "../assets/resume/image-7.png";

import Image8 from "../assets/resume/image-8.png";

import Image9 from "../assets/resume/image-9.png";

import Image10 from "../assets/resume/image-10.png";

import Image11 from "../assets/resume/image-11.png";

import Image12 from "../assets/resume/image-12.png";

import ImageMobile1 from "../assets/resumeMobile/image1.png";
import ImageMobile2 from "../assets/resumeMobile/image2.png";
import ImageMobile3 from "../assets/resumeMobile/image3.png";
import ImageMobile4 from "../assets/resumeMobile/image4.png";
import ImageMobile5 from "../assets/resumeMobile/image5.png";

const backgroundImgModalMobileList: any = [
  Image1Hover,
  Image2Hover,
  Image3Hover,
  Image4Hover,
  Image5Hover,
];

const backgroundImgMobileList: any = [
  ImageMobile1,
  ImageMobile2,
  ImageMobile3,
  ImageMobile4,
  ImageMobile5,
];

const backgroundImgBarList: any = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];

const backgroundImgBarHoverList: any = [
  Image1Hover,
  Image2Hover,
  Image3Hover,
  Image4Hover,
  Image5Hover,
  Image1Hover,
  Image1Hover,
  Image1Hover,
  Image1Hover,
  Image1Hover,
  Image1Hover,
  Image1Hover,
];

const checkImageModalMobileIdx = (idx: number) => {
  if (idx > backgroundImgModalMobileList.length - 1) {
    return idx % backgroundImgModalMobileList.length;
  }
  return idx;
};

const checkImageMobileIdx = (idx: number) => {
  if (idx > backgroundImgMobileList.length - 1) {
    return idx % backgroundImgMobileList.length;
  }
  return idx;
};

const checkImageIdx = (idx: number) => {
  if (idx > backgroundImgBarList.length - 1) {
    return idx % backgroundImgBarList.length;
  }
  return idx;
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5efe2;
`;

export const WrapperTitle = styled.div`
  background-image: url(${BackgroundImage});
  width: 100%;
  background-color: #f5efe2;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 122px;
  margin-top: 60px;
  width: 1225px;

  ${"@media only screen and (max-width:819px)"} {
    margin-top: 0;
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  color: #2b0e03;
  text-align: center;
  font-size: 48px;
  font-family: Gotham Rounded;
  line-height: 58px;

  ${"@media only screen and (max-width:819px)"} {
    font-size: 32px;
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const WrapperBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bar = styled.div<{ idx: number }>`
  background-image: ${({ idx }) =>
    `url(${backgroundImgBarList[checkImageIdx(idx)]})`};
  height: 500px;
  width: 80px;
  border-radius: 8px;
  filter: grayscale(1);
  transition: filter 0.2s linear;
`;

export const Background = styled.div`
  background-image: url(${BackgroundDark});
  height: 500px;
  width: 80px;
  border-radius: 8px;
  position: absolute;
`;

export const Img = styled.img`
  position: absolute;
  top: 24px;
  left: 24px;
  transition: left 200ms linear;
  z-index: 10;
`;

export const ImgMobile = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  transition: left 200ms linear;
  z-index: 10;
`;

export const Label = styled.div`
  color: #fff;
  font-size: 32px;
  font-family: Montserrat;
  font-weight: 900;
  line-height: 28px;
  letter-spacing: 7.68px;
  transform: rotate(-90deg);
  position: absolute;
  bottom: 120px;
  width: 220px;
  left: 0;
  left: -70px;
`;

export const WrapperResumeContent = styled.div`
  display: flex;
  margin-top: 24px;
  max-width: 100%;
  justify-content: center;
  align-items: center;

  ${"@media only screen and (max-width:819px)"} {
    display: none;
  }
`;

export const ResumeContent = styled.div`
  display: flex;
  max-width: 1225px;
  overflow: auto;
  margin-bottom: 48px;
`;

export const BackgroundHover = styled.div`
  background: rgba(0, 0, 0, 0.85);
  height: 540px;
  width: 800px;
  display: none;
  position: absolute;
`;

export const LabelHover = styled.div`
  color: #eeecf4;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 0.4px;
  position: absolute;
  z-index: 10;
  width: 600px;
  top: 24px;
  left: 24px;
  display: none;
`;

export const Resume = styled.ul`
  position: absolute;
  z-index: 10;
  width: 750px;
  bottom: 24px;
  left: 48px;
  display: none;
  list-style-type: disc;
  height: 350px;
  flex-direction: column;

  li {
    color: #eeecf4;
    font-size: 24px;
    font-family: Roboto;
    line-height: 32px;
    letter-spacing: 0.3px;
  }
`;

export const BarWrapper = styled.div<{ idx: number }>`
  display: flex;
  height: 500px;
  width: 80px;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  margin-right: 28px;
  transition: width 0.2s linear;

  :hover {
    width: 800px;

    ${Bar} {
      background-image: ${({ idx }) =>
        `url(${backgroundImgBarHoverList[checkImageIdx(idx)]})`};
      filter: grayscale(0);
      width: 800px;
    }

    ${Background} {
      display: none;
    }

    ${Img} {
      left: 740px;
    }

    ${Label} {
      display: none;
    }

    ${BackgroundHover} {
      display: block;
    }

    ${LabelHover} {
      display: block;
    }

    ${Resume} {
      display: flex;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${"@media only screen and (max-width:819px)"} {
    position: absolute;
    bottom: 32px;
    left: 24px;
    right: 24px;
    width: auto;
  }
`;

export const WrapperResumeContentMobile = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  overflow: auto;
  padding: 0 24px;
  align-items: center;
  position: relative;
  margin-top: 24px;

  #label {
    color: #fff;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 28px; /* 87.5% */
    letter-spacing: 7.68px;
    text-transform: uppercase;
    z-index: 10;
    position: absolute;
    left: 24px;
  }

  button {
    filter: grayscale(100%);
  }

  ${"@media only screen and (max-width:819px)"} {
    display: flex;
  }
`;

export const TangramWrapper = styled.div`
  position: absolute;
  top: 0;
`;

export const WrapperButton = styled.div`
  max-width: 364px;

  width: 100%;
  height: 80px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ItemButton = styled.button<{ idx: number }>`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: ${({ idx }) =>
    `url(${backgroundImgMobileList[checkImageMobileIdx(idx)]})`};
  position: relative;
`;

export const Gradient = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 81.68%
  );
  width: 100%;
  height: 80px;
  border-radius: 8px;
`;

export const WrapperModal = styled.div<{ idx: number }>`
  position: absolute;
  width: 100%;
  z-index: 99;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  background-image: ${({ idx }) =>
    `url(${backgroundImgModalMobileList[checkImageModalMobileIdx(idx)]})`};

  img {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 32px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  span {
    color: #fff;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 38px; /* 118.75% */
    letter-spacing: 1.28px;
    text-transform: uppercase;
  }

  button {
    border-radius: 8px;
    border: 2px solid #fff;
    display: flex;
    width: 200px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-top: 24px;
    color: #3b3b3b;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
  }
`;

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 0.85;
`;

export const ModalHeaderWrapper = styled.div`
  position: absolute;
  z-index: 20;
  top: 16px;
  left: 16px;
  right: 16px;

  img {
    position: absolute;
    right: 16px;
    top: 16px;
  }
`;

export const ModalHeaderText = styled.div`
  color: #eeecf4;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px; /* 118.75% */
  letter-spacing: 0.4px;
`;

export const ModalTextWrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 16px;
  left: 16px;
  bottom: 122px;
  height: 79vh;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
`;

export const ModalText = styled.div`
  color: rgb(238, 236, 244);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.3px;

  li {
    margin-top: 15px;
  }
`;
