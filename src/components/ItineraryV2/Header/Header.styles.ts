import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 108px;
  justify-content: space-between;
  background-color: transparent;
  padding-top: 38px;
`;

export const Button = styled.div`
  color: #2b0e03;
  display: flex;
  align-items: center;
  font-weight: 350;
  font-size: 20px;
  font-family: "Gotham Rounded";
  width: 250px;
  span {
    cursor: pointer;
  }

  svg {
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const EnterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 56px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  border-radius: 30px;

  border: 2px solid #eeecf4;
  background-color: transparent;
  color: #fafafa;

  :hover {
    color: #ffffff;
    background: #543f92;
    border: 2px solid #543f92;
  }

  :disabled {
    background: #f5f5f5;
    color: #c1c1c1;
    border: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.button`
  color: #2b0e03;
  font-size: 20px;
  font-family: Gotham Rounded;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  cursor: pointer;
  margin-right: 32px;
`;
