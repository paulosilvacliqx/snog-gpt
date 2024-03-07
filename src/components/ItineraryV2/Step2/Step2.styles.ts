import styled from "styled-components";
import Background from "../assets/background-v2.svg";

export const Container = styled.div`
  background-image: url(${Background});
  width: 100%;
  height: 100vh;
  background-color: #f5efe2;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  ${"@media only screen and (max-width:819px)"} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SlideItem = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffc20e;
  user-select: none;
`;

export const WrapperSlideItem = styled.div`
  height: 486px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${"@media only screen and (max-width:819px)"} {
    height: auto;
  }
`;

export const Action = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

  ${"@media only screen and (max-width:819px)"} {
    padding: 32px 24px;
  }
`;
