import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Styles from "./ItineraryAdjust.styles";
import { Header } from "../Header/Header";
import { Button } from "../Button/Button";
import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";
import { Textarea } from "../Textarea/Textarea";

export const ItineraryAdjust = () => {
  const navigate = useNavigate();
  const { setItineraryData, itineraryDataResponse } =
    useContext(ItineraryContext);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    setItineraryData({
      alter: 1,
      content: `Levando em consideração o roteiro informado,faça o seguinte ajuste: ${value}`,
      last_message: itineraryDataResponse.message.content,
    });
    navigate("/roteiro/loading");
  };

  return (
    <Styles.Container>
      <div>
        <Header
          handleBack={() => navigate("/roteiro/resume")}
          btnLabel="Voltar"
        />
        <Styles.Title>VAMOS AJUSTAR</Styles.Title>
        <Styles.Content>
          <Styles.Subtitle>
            Para editar seu roteiro você pode falar “Faça um roteiro com mais
            restaurantes” ou “Quero mudar o mês para outubro” ou “Não quero
            viajar para o Brasil e sim para Paris”. Lembre de ser claro para que
            o Chat GPT entenda o que você deseja
          </Styles.Subtitle>

          <Styles.WrapperInput>
            <Styles.Line />
            <Textarea
              placeholder="Escreva aqui..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Styles.Line />
          </Styles.WrapperInput>
        </Styles.Content>
      </div>
      {value && (
        <Styles.Action>
          <Button onClick={handleSubmit}>Continuar</Button>
        </Styles.Action>
      )}
    </Styles.Container>
  );
};
