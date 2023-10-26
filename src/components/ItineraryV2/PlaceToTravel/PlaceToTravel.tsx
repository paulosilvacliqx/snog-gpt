import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Styles from "./PlaceToTravel.styles";
import { Header } from "../Header/Header";
import { Button } from "../Button/Button";
import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";
import { Textarea } from "../Textarea/Textarea";

export const PlaceToTravel = () => {
  const navigate = useNavigate();
  const { setItineraryData, itineraryData } = useContext(ItineraryContext);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    setItineraryData({
      ...itineraryData,
      content: `${itineraryData.content} Gostaria de viajar para ${value}`,
    });
    navigate("/roteiro/passo-2");
  };

  return (
    <Styles.Container>
      <Header
        handleBack={() => navigate("/roteiro/passo-1")}
        btnLabel="Voltar"
      />
      <Styles.Title>PARA ONDE IR</Styles.Title>
      <Styles.Content>
        <Styles.Subtitle>
          Escreva um local no campo abaixo em que você deseja visitar. Informe
          apenas localidades como países, estados ou cidades. Dessa forma, o GPT
          será certeiro no seu roteiro inteligente.
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
      {value && (
        <Styles.Action>
          <Button onClick={handleSubmit}>Continuar</Button>
        </Styles.Action>
      )}
    </Styles.Container>
  );
};
