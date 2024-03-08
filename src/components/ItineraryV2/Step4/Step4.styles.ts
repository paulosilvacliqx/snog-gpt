import styled, { css } from "styled-components";
import Tangram1 from "../assets/tangram/tangram-1.png";
import Tangram1Hover from "../assets/tangram/tangram-1-hover.png";
import Tangram2 from "../assets/tangram/tangram-2.png";
import Tangram2Hover from "../assets/tangram/tangram-2-hover.png";
import Tangram3 from "../assets/tangram/tangram-3.png";
import Tangram3Hover from "../assets/tangram/tangram-3-hover.png";
import Tangram4 from "../assets/tangram/tangram-4.png";
import Tangram4Hover from "../assets/tangram/tangram-4-hover.png";
import Tangram5 from "../assets/tangram/tangram-5.png";
import Tangram5Hover from "../assets/tangram/tangram-5-hover.png";
import Tangram6 from "../assets/tangram/tangram-6.png";
import Tangram6Hover from "../assets/tangram/tangram-6-hover.png";
import Tangram7 from "../assets/tangram/tangram-7.png";
import Tangram7Hover from "../assets/tangram/tangram-7-hover.png";
import Tangram8 from "../assets/tangram/tangram-8.png";
import Tangram8Hover from "../assets/tangram/tangram-8-hover.png";
import Tangram9 from "../assets/tangram/tangram-9.png";
import Tangram9Hover from "../assets/tangram/tangram-9-hover.png";
import Tangram10 from "../assets/tangram/tangram-10.png";
import Tangram10Hover from "../assets/tangram/tangram-10-hover.png";
import Tangram11 from "../assets/tangram/tangram-11.png";
import Tangram11Hover from "../assets/tangram/tangram-11-hover.png";
import Tangram12 from "../assets/tangram/tangram-12.png";
import Tangram12Hover from "../assets/tangram/tangram-12-hover.png";
import Tangram13 from "../assets/tangram/tangram-13.png";
import Tangram13Hover from "../assets/tangram/tangram-13-hover.png";
import Tangram14 from "../assets/tangram/tangram-14.png";
import Tangram14Hover from "../assets/tangram/tangram-14-hover.png";
import Tangram15 from "../assets/tangram/tangram-15.png";
import Tangram15Hover from "../assets/tangram/tangram-15-hover.png";

type TangramPieceType = {
  tangram: number;
  height: number;
  width: number;
  fontSize: number;
  marginRight: number;
  marginTop: number;
  checked: boolean;
  limitedSelected: boolean;
};

type WrapperTangramPieceType = {
  position: string;
  left: number;
  top: number;
  right: number;
  bottom: number;
};

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffc20e;
  overflow: auto;
  min-width: 1500px;
  overflow: scroll;

  ${"@media only screen and (max-width:819px)"} {
    min-width: auto;
  }
`;

export const Title = styled.h1`
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  color: #2b0e03;
  margin-top: 52px;

  ${"@media only screen and (max-width:819px)"} {
    font-size: 32px;
    margin-top: 20px;
    line-height: normal;
  }
`;

export const SubTitle = styled.h4`
  color: #2b0e03;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 40px;
  text-align: center;
  font-family: "Inter";

  ${"@media only screen and (max-width:819px)"} {
    font-size: 18px;
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  min-height: 700px;

  ${"@media only screen and (max-width:1270px)"} {
    min-height: 990px;
  }

  ${"@media only screen and (max-width:819px)"} {
    display: none;
  }
`;

export const CanvasTangram = styled.div`
  display: flex;
  position: relative;

  button {
    position: absolute;
    top: 590px;
    left: 440px;
  }
`;

const tangramBackground: any = {
  0: Tangram1,
  1: Tangram2,
  2: Tangram3,
  3: Tangram4,
  4: Tangram5,
  5: Tangram6,
  6: Tangram7,
  7: Tangram8,
  8: Tangram9,
  9: Tangram10,
  10: Tangram11,
  11: Tangram12,
  12: Tangram13,
  13: Tangram14,
  14: Tangram15,
};

const tangramBackgroundHover: any = {
  0: Tangram1Hover,
  1: Tangram2Hover,
  2: Tangram3Hover,
  3: Tangram4Hover,
  4: Tangram5Hover,
  5: Tangram6Hover,
  6: Tangram7Hover,
  7: Tangram8Hover,
  8: Tangram9Hover,
  9: Tangram10Hover,
  10: Tangram11Hover,
  11: Tangram12Hover,
  12: Tangram13Hover,
  13: Tangram14Hover,
  14: Tangram15Hover,
};

const textPosition: any = {
  0: css`
    left: 42px;
    top: 45px;
  `,
  1: css`
    left: 75px;
    top: 80px;
  `,
  2: css`
    left: 25px;
    top: 50px;
  `,
  3: css`
    left: 30px;
    top: 30px;
  `,
  4: css`
    left: 20px;
    top: 75px;
  `,
  5: css`
    left: 60px;
    top: 65px;
  `,
  6: css`
    left: 30px;
    top: 58px;
  `,
  7: css`
    left: 60px;
    top: 48px;
  `,
  8: css`
    left: 25px;
    top: 65px;
  `,
  9: css`
    left: 38px;
    top: 25px;
  `,
  10: css`
    left: 38px;
    top: 110px;
  `,
  11: css`
    left: 32px;
    top: 107px;
  `,
  12: css`
    left: 12px;
    top: 110px;
  `,
  13: css`
    left: 50px;
    top: 95px;
  `,
  14: css`
    left: 25px;
    top: 115px;
  `,
};

const isChecked = (checked: boolean, tangram: number) => {
  if (checked) {
    return `url(${tangramBackgroundHover[tangram]})`;
  }
  return `url(${tangramBackground[tangram]})`;
};

export const WrapperTangramPiece = styled.div<WrapperTangramPieceType>`
  position: ${({ position }) => position};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  bottom: ${({ bottom }) => bottom}px;
`;

export const TangramPiece = styled.div<TangramPieceType>`
  z-index: 100;
  display: flex;
  background-image: ${({ checked, tangram }) => isChecked(checked, tangram)};
  background-repeat: no-repeat;

  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  position: relative;
  cursor: pointer;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-top: ${({ marginTop }) => marginTop}px;

  span {
    font-size: ${({ fontSize }) => fontSize}px;
    font-family: Gotham Rounded;
    font-weight: 300;
    font-weight: ${({ checked }) => (checked ? 400 : 300)};
    color: #ffffff;
    position: absolute;
    ${({ tangram }) => textPosition[tangram]}
  }

  ${({ limitedSelected, tangram }) =>
    !limitedSelected &&
    css`
      :hover {
        background-image: url(${tangramBackgroundHover[tangram]});
        filter: opacity(85%);
        span {
          font-weight: 400;
        }
      }
    `}
`;
