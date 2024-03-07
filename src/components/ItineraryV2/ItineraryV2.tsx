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
      <Styles.Info>
        <Styles.Title>
          CRIE SEU ROTEIRO <br />
          INTELIGENTE
        </Styles.Title>
        <Styles.Content>
          <Styles.Line />
          <Styles.Subtitle>
            Olá, seja bem vindo!
            <br />
            Conheça experiências incríveis feitas com todo poder do chat GPT e a
            <br />
            expertise Snog.
          </Styles.Subtitle>
          <Styles.Line />
        </Styles.Content>
      </Styles.Info>
      <Styles.Action>
        <Button onClick={handleNext}>Começar agora</Button>
      </Styles.Action>
    </Styles.Container>
  );
};
