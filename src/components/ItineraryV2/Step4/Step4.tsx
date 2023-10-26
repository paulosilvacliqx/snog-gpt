import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Styles from "./Step4.styles";
import { Header } from "../Header/Header";
import { forEach, uniqueId } from "lodash";
import { Button } from "../Button/Button";
import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";

export const Step4 = () => {
  const navigate = useNavigate();
  const { itineraryData, setItineraryData } = useContext(ItineraryContext);

  const [tangramSelecteds, setTangramSelecteds] = useState<any>([]);

  const tangramList: any = [
    {
      height: 190,
      width: 172,
      label: "DESIGN",
      marginRight: 60,
      marginTop: 0,
      fontSize: 24,
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    {
      height: 208,
      width: 234,
      label: "MODA",
      marginRight: 44,
      marginTop: 0,
      fontSize: 24,
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    {
      height: 197,
      width: 216,
      label: "NATUREZA",
      marginRight: 31,
      marginTop: 0,
      fontSize: 24,
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    {
      height: 119,
      width: 233,
      label: "AVENTURA",
      marginRight: 0,
      marginTop: 20,
      fontSize: 22,
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    {
      height: 176,
      width: 230,
      label: "VOLUNTARIADO",
      marginRight: 0,
      marginTop: 30,
      fontSize: 22,
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    {
      height: 176,
      width: 216,
      label: "ARTE",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 155,
      left: 110,
      right: 0,
      bottom: 0,
    },
    {
      height: 176,
      width: 250,
      label: "FOTOGRAFIA",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 177,
      left: 365,
      right: 0,
      bottom: 0,
    },
    {
      height: 176,
      width: 250,
      label: "MÚSICA",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 130,
      left: 655,
      right: 0,
      bottom: 0,
    },
    {
      height: 176,
      width: 290,
      label: "ESPIRITUALIDADE",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 165,
      left: 940,
      right: 0,
      bottom: 0,
    },
    {
      height: 176,
      width: 290,
      label: "EMPREENDER",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 340,
      left: -60,
      right: 0,
      bottom: 0,
    },
    {
      height: 231,
      width: 290,
      label: "TECNOLOGIA",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 285,
      left: 265,
      right: 0,
      bottom: 0,
    },
    {
      height: 240,
      width: 290,
      label: "GASTRONOMIA",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 280,
      left: 580,
      right: 0,
      bottom: 0,
    },
    {
      height: 235,
      width: 290,
      label: "CULTURA",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 380,
      left: 900,
      right: 0,
      bottom: 0,
    },
    {
      height: 235,
      width: 290,
      label: "FÉ",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 390,
      left: 1100,
      right: 0,
      bottom: 0,
    },
    {
      height: 235,
      width: 200,
      label: "INOVAÇÃO",
      marginRight: 0,
      marginTop: 30,
      fontSize: 24,
      position: "absolute",
      top: 410,
      left: 90,
      right: 0,
      bottom: 0,
    },
  ];

  const checkSelected = (selected: boolean | undefined) => {
    const tangramSelected: [] = tangramSelecteds.filter(
      (selected: boolean) => selected
    );

    if (tangramSelected.length < 5) {
      if (selected === undefined) {
        return true;
      } else {
        return selected;
      }
    }

    if (selected === undefined) {
      return false;
    }

    return false;
  };

  const handleClick = (selectedIdx: number) => {
    const newTangramSelecteds = [...tangramSelecteds];
    newTangramSelecteds[selectedIdx] =
      newTangramSelecteds[selectedIdx] === undefined
        ? checkSelected(undefined)
        : checkSelected(!newTangramSelecteds[selectedIdx]);
    setTangramSelecteds(newTangramSelecteds);
  };

  const handNextStep = () => {
    let step4: any = "";

    forEach(tangramSelecteds, (item: boolean, key: string) => {
      if (item === true) {
        const label = tangramList[key].label;
        step4 = step4 ? step4 + `, ${label}` : label;
      }
    });

    setItineraryData({
      ...itineraryData,
      content: `${itineraryData.content} Combine estes termos e personalize uma experiência inesquecível. Que contenham: ${step4}`,
    });
    navigate("/roteiro/loading");
  };

  const isDisabled = () => {
    const tangramSelected: [] = tangramSelecteds.filter(
      (selected: boolean) => selected
    );
    return tangramSelected.length < 3;
  };

  const isLimitedSelected = () => {
    const tangramSelected: any = tangramSelecteds.filter(
      (selected: boolean) => selected
    );

    return tangramSelected.length === 5;
  };

  useEffect(() => {
    if (!itineraryData.content) {
      navigate("/");
    }
  }, []);

  return (
    <Styles.Container>
      <Header
        handleBack={() => navigate("/roteiro/passo-3")}
        btnLabel="Voltar"
      />
      <Styles.Title>ESTAMOS QUASE ACABANDO</Styles.Title>
      <Styles.SubTitle>
        Para que a IA crie um roteiro ainda mais personalizado e especial,
        <br /> selecione abaixo de 3 à 5 palavras que combinam com você
      </Styles.SubTitle>
      <Styles.Content>
        <Styles.CanvasTangram>
          {tangramList.map((item: any, idx: number) => (
            <Styles.WrapperTangramPiece
              position={item.position}
              top={item.top}
              left={item.left}
              right={item.right}
              bottom={item.bottom}
              key={uniqueId()}
            >
              <Styles.TangramPiece
                limitedSelected={isLimitedSelected()}
                checked={tangramSelecteds[idx]}
                onClick={() => handleClick(idx)}
                tangram={idx}
                height={item.height}
                marginTop={item.marginTop}
                width={item.width}
                fontSize={item.fontSize}
                marginRight={item.marginRight}
              >
                <span>{item.label}</span>
              </Styles.TangramPiece>
            </Styles.WrapperTangramPiece>
          ))}
          <Button onClick={handNextStep} disabled={isDisabled()}>
            Criar roteiro inteligente
          </Button>
        </Styles.CanvasTangram>
      </Styles.Content>
    </Styles.Container>
  );
};
