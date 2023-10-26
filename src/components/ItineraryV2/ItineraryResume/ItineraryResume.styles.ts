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
`;

export const Title = styled.h1`
  color: #2b0e03;
  text-align: center;
  font-size: 48px;
  font-family: Gotham Rounded;
  line-height: 58px;
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
`;
