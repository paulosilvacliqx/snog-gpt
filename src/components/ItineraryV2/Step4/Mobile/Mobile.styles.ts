import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: none;

  ${"@media only screen and (max-width:819px)"} {
    display: flex;
    flex-direction: column;
    padding: 0 24px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  height: 45vh;
`;

const selected = (color: string) => css`
  background-color: ${color};
  ${() =>
    color !== "transparent" &&
    css`
      border: none;
    `}
`;

export const Button = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #fff;
  padding: 16px 0;
  margin-bottom: 24px;
  ${({ color }) => selected(color)}

  span {
    color: #eeecf4;
    font-family: "Gotham Rounded";
    font-size: 24px;
    font-style: normal;
    font-weight: 350;
    line-height: normal;
    text-transform: uppercase;
    margin-left: 24px;
  }
`;

export const SelectedButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  height: 56px;
  position: absolute;
  bottom: 32px;
  left: 24px;
  right: 24px;

  :not([disabled]):hover {
    color: #ffffff;
    background: #f15a22;
  }

  :disabled {
    color: #a1a1a1;
    background-color: #d1d1d1;
    border: 2px solid #d1d1d1;
  }
`;
