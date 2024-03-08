import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 24px;
  flex-direction: column;
  display: none;

  button {
    filter: grayscale(100%);
  }

  #label {
    color: #fff;
    z-index: 2;
    position: absolute;
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 28px;
    letter-spacing: 5.76px;
    text-transform: uppercase;
  }

  ${"@media only screen and (max-width:819px)"} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemButton = styled.button<{ backgroundImage: string }>`
  width: 364px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${({ backgroundImage }) => backgroundImage});
  position: relative;
  span {
    z-index: 1;
    color: #fff;
  }
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
  width: 364px;
  height: 80px;
  border-radius: 8px;
`;

export const WrapperButton = styled.div`
  width: 364px;
  height: 80px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WrapperModal = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: space-between;
`;

export const TravelMovie = styled.section`
  height: 100vh;
  align-items: center;
  justify-content: left;

  video {
    object-fit: cover;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 999;
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
