import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as Styles from "./ItineraryV2.styles";
import { Button } from "./Button/Button";

export const ItineraryV2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/roteiro/passo-1");
  };

  return (
    <Styles.Container>
      <Styles.Title>
        CRIE SEU ROTEIRO <br />
        INTELIGENTE
      </Styles.Title>
      <Styles.Content>
        <Styles.Line />
        <Styles.Subtitle>
          PARA COMEÇAROlá, seja bem vindo!
          <span style={{ fontSize: 32, marginLeft: 8 }}>&#128522;</span>
          <br />
          Conheça experiências incríveis feitas com todo poder do chat GPT e a
          <br />
          expertise Snog.
        </Styles.Subtitle>
        <Styles.Line />
      </Styles.Content>
      <Styles.Action>
        <Button onClick={handleNext}>Começar agora</Button>
      </Styles.Action>
    </Styles.Container>
  );
};
