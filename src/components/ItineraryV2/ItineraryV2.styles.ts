import styled from "styled-components";
import Background from "./assets/background-v2.svg";

export const Container = styled.div`
  background-image: url(${Background});
  width: 100%;
  min-height: 100vh;
  background-color: #f5efe2;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding: 30px 0;

  ${"@media only screen and (max-width:819px)"} {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const Info = styled.div``;

export const Title = styled.h1`
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  color: #2b0e03;
  margin-top: 140px;

  ${"@media only screen and (max-width:819px)"} {
    margin-top: 64px;
    font-size: 32px;
  }
`;

export const Subtitle = styled.div`
  color: #2b0e03;
  font-size: 24px;
  font-family: "Inter";
  text-align: center;

  ${"@media only screen and (max-width:1599px)"} {
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px;
  }

  ${"@media only screen and (max-width:819px)"} {
    font-size: 20px;
    margin: 0 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 90px 0;
  flex: 1;

  ${"@media only screen and (max-width:819px)"} {
    margin-top: 64px;
    margin-bottom: 0;
  }
`;

export const Line = styled.div`
  border: 1px solid #ffc20e;
  height: 1px;
  width: 15%;

  ${"@media only screen and (max-width:819px)"} {
    display: none;
  }
`;

export const Action = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

  ${"@media only screen and (max-width:819px)"} {
    padding: 0 32px;
  }
`;
