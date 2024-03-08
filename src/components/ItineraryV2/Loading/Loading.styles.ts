import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5efe2;
`;

export const Title = styled.h1`
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  color: #2b0e03;
  line-height: 1.1;
  margin-bottom: 48px;

  ${"@media only screen and (max-width:819px)"} {
    font-size: 32px;

    br {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  flex-direction: column;
`;

export const LoadingWrapper = styled.div`
  height: 30px;
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
