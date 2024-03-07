import styled from "styled-components";
import BackgroundImage from "../assets/background-v2.svg";

export const Container = styled.div`
  background-image: url(${BackgroundImage});
  width: 100%;
  height: 100vh;
  background-color: #f5efe2;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: auto;
`;

export const Title = styled.h1`
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  color: #2b0e03;
  margin-top: 60px;

  ${"@media only screen and (max-width:819px)"} {
    font-size: 32px;
    margin-top: 20px;
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
  width: 100%;

  ${"@media only screen and (max-width:819px)"} {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Label = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 28px;
  letter-spacing: 0.24em;
  color: #ffffff;
  position: absolute;
  z-index: 1000;
  left: 155px;
  transition: left 0.3s linear;

  ${"@media only screen and (max-width:1599px)"} {
    font-size: 24px;
    left: 130px;
  }
`;

export const SelectButton = styled.button`
  display: flex;
  transition: opacity 0.2s linear;
  visibility: hidden;
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
  position: absolute;
  right: 32px;
  top: 32px;
  z-index: 1000;

  :hover {
    border: 2px solid #1c1c1c;
    background: #1c1c1c;
    color: #ffffff;
  }

  ${"@media only screen and (max-width:1599px)"} {
    width: 130px;
    height: 36px;
    font-size: 18px;
  }
`;

export const Background = styled.div`
  width: 500px;
  visibility: hidden;
  height: 625px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 64%,
    rgba(0, 0, 0, 0.8) 94.91%
  );
  position: absolute;
  z-index: 100;
  top: 0;

  ${"@media only screen and (max-width:1599px)"} {
    width: 380px;
    height: 505px;
  }
`;

export const BoxItem = styled.div<{
  backgroundImage: any;
}>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  width: 500px;
  height: 80px;
  border-radius: 8px;
  margin-right: 24px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.2s linear, background-image 1s linear;
  position: relative;

  video {
    top: 0;
    position: absolute;
    object-fit: cover;
    right: 0;
    min-width: 100%;
    height: 625px;
    z-index: 100;
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 500ms ease, visibility 500ms ease;
  }

  :hover {
    background-image: none;
    height: 625px;

    video {
      opacity: 1;
      visibility: visible;
    }

    ${Label} {
      left: 32px;
      top: 46px;
      line-height: 28px;
      letter-spacing: 1.28px;
    }

    ${SelectButton} {
      opacity: 1;
      visibility: visible;
    }

    ${Background} {
      visibility: visible;
    }
  }

  ${"@media only screen and (max-width:1599px)"} {
    width: 380px;
    height: 61px;
    background-size: contain;
    background-position: center;
    margin-right: 16px;
    margin-bottom: 16px;

    video {
      height: 505px;
    }

    :hover {
      height: 505px;

      ${Label} {
        left: 32px;
        top: 36px;
      }
    }
  }
`;
