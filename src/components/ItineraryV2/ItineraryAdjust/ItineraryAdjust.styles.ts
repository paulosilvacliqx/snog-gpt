import styled from "styled-components";
import Background from "../assets/background-v2.svg";

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
    padding: 0;
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
  margin-top: 10px;

  ${"@media only screen and (max-width:819px)"} {
    font-size: 32px;
    margin-top: 20px;
  }
`;

export const Subtitle = styled.div`
  color: #2b0e03;
  font-size: 24px;
  font-family: "Inter";
  text-align: center;
  max-width: 800px;
  margin-top: 24px;

  ${"@media only screen and (max-width:819px)"} {
    font-size: 18px;
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 90px 0;
  flex: 1;
`;

export const Line = styled.div`
  border: 1px solid #ffc20e;
  height: 1px;
  width: 15%;
  margin-top: 15px;

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
    padding: 32px 24px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffc20e;
  text-align: center;
  font-size: 32px;
  font-family: Inter;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.608px;
  max-width: 750px;
  width: 750px;
  outline: none;

  ::placeholder {
    text-align: center;
    color: #ffc20e;
    font-size: 32px;
    font-family: Inter;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.608px;
  }

  :focus,
  :active,
  :focus-visible {
    border: none;
  }
`;
