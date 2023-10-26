import styled from "styled-components";
import BackgroundImageBtn from "../assets/background-v2-download-btn.svg";
import BackgroundImageBtnHover from "../assets/background-v2-download-btn-hover.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f15a22;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: auto;
  position: relative;
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
  margin-bottom: 40px;
  text-align: center;
  font-family: "Inter";
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const WrapperButtonDownload = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 60px;

  ${"@media only screen and (max-width:1599px)"} {
    margin-top: 30px;
  }
`;

export const ButtonDownload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  width: 230px;
  height: 250px;
  background-image: url(${BackgroundImageBtn});
  cursor: pointer;

  span {
    color: #fafafa;
    text-align: center;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 500;
    line-height: 24px;
  }

  :hover {
    background-image: url(${BackgroundImageBtnHover});
  }
`;

export const SubTitleFooter = styled.h4`
  color: #2b0e03;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: center;
  font-family: "Inter";
  position: fixed;
  height: 50px;
  bottom: 30px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 90vh;
  padding: 0 48px 48px 48px;
`;

export const ModalContent = styled.div`
  width: 100%;
  background-color: #f15a22;
  min-height: 100vh;
  padding: 0 48px 48px 48px;

  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  width: 100%;
  color: #ffffff;
  font-size: 24px;
  font-family: Roboto;
  line-height: 32px;
  letter-spacing: 0.3px;
`;

export const ModalActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 48px;
  padding: 0 50px;
  padding-bottom: 64px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 56px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;

  background: #ffffff;
  border: 2px solid #f15a22;
  color: #f15a22;

  :hover {
    background: #f15a22;
    color: #ffffff;
  }

  :disabled {
    background: #f5f5f5;
    color: #c1c1c1;
    border: none;
  }
`;
