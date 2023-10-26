import styled from "styled-components";

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

  background-color: #ffc20e;
  color: #2b0e03;

  :hover {
    color: #ffffff;
    background: #f15a22;
  }

  :disabled {
    background: #f5f5f5;
    color: #c1c1c1;
    border: none;
  }
`;
