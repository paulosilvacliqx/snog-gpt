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
`;

export const Title = styled.h1`
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  color: #2b0e03;
  margin-top: 140px;
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
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 90px 0;
  flex: 1;
`;

export const Line = styled.div`
  border: 1px solid #ffc20e;
  height: 1px;
  width: 15%;
`;

export const Action = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
