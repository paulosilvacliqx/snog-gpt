import styled from "styled-components";

export const Textarea = styled.textarea`
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
  height: 150px;

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
