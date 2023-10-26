import { useContext, useEffect, useState } from "react";
import { isEmpty, uniqueId } from "lodash";
import { useNavigate } from "react-router-dom";
import * as Styles from "./ItineraryResume.styles";
import { Header } from "../Header/Header";
import Tangram1 from "../assets/resume/tangram-1.png";
import Tangram2 from "../assets/resume/tangram-2.png";
import Tangram3 from "../assets/resume/tangram-3.png";
import Tangram4 from "../assets/resume/tangram-4.png";
import Tangram5 from "../assets/resume/tangram-5.png";
import Tangram6 from "../assets/resume/tangram-6.png";
import Tangram7 from "../assets/resume/tangram-7.png";
import Tangram8 from "../assets/resume/tangram-8.png";
import Tangram9 from "../assets/resume/tangram-9.png";
import Tangram10 from "../assets/resume/tangram-10.png";
import Tangram11 from "../assets/resume/tangram-11.png";
import Tangram12 from "../assets/resume/tangram-12.png";
import Tangram13 from "../assets/resume/tangram-13.png";
import Tangram14 from "../assets/resume/tangram-14.png";
import Tangram15 from "../assets/resume/tangram-15.png";
import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";
import { Button } from "../Button/Button";
import { saveItineraryByUser } from "../../../services/Itineraries/service";
import { UserDataContext } from "../../../contexts/ContextsFiles/UserData";
import { SaveItinerary } from "../../../services/Itineraries/type";

const tangramIconList: any = [
  Tangram1,
  Tangram2,
  Tangram3,
  Tangram4,
  Tangram5,
  Tangram6,
  Tangram7,
  Tangram8,
  Tangram9,
  Tangram10,
  Tangram11,
  Tangram12,
  Tangram13,
  Tangram14,
  Tangram15,
];

type ResumeList = {
  title: string;
  resume: string[];
};

export const ItineraryResume = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);
  const { itineraryDataResponse, itineraryData } = useContext(ItineraryContext);
  const [data, setData] = useState<ResumeList[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!itineraryData.content) {
      navigate("/");
    }
  }, []);

  const format1 = () => {
    const messageSplit = itineraryDataResponse.message.content.split("\n\n");
    const newData: ResumeList[] = [];

    let resumeItem: ResumeList = { title: "", resume: [] };
    resumeItem.resume = [];
    messageSplit.forEach((item) => {
      if (item.includes("Dia")) {
        if (resumeItem.title) {
          newData.push(resumeItem);
          resumeItem = { title: "", resume: [] };
          resumeItem.resume = [];
          resumeItem.title = item;
        } else {
          resumeItem.title = item;
        }
      }
      if (!item.includes("Dia")) {
        resumeItem.resume.push(item);
      }
    });

    setData(newData);
  };

  const format2 = () => {
    const messageSplit = itineraryDataResponse.message.content.split("\n\n");
    const newData: ResumeList[] = [];

    let resumeItem: ResumeList = { title: "", resume: [] };
    resumeItem.resume = [];
    console.log("messageSplit", messageSplit);
    messageSplit.forEach((item) => {
      console.log("item", item);

      if (item.includes("Dia")) {
        resumeItem = { title: "", resume: [] };
        const itemSplit = item.split("\n");
        console.log("itemSplit", itemSplit);
        itemSplit.forEach((day, idx) => {
          console.log("day", day);

          if (idx !== 0) {
            resumeItem.resume.push(day.replace("-", ""));
          }
        });
        newData.push(resumeItem);
        console.log("resumeItem", resumeItem);
      }
    });
    setData(newData);
  };

  useEffect(() => {
    if (!isEmpty(itineraryDataResponse)) {
      format2();
    }
  }, [itineraryDataResponse]);

  const sanitizeNumber = (number: number) =>
    number < 10 ? `0${number}` : number;

  const checkTangramIconIdx = (idx: number) => {
    if (idx > tangramIconList.length - 1) {
      return idx % tangramIconList.length;
    }
    return idx;
  };

  const onSave = async () => {
    const request: SaveItinerary = {
      user_id: "5",
      itinerary_data: itineraryDataResponse.message.content,
    };
    const response = await saveItineraryByUser(request);
    if (response.success) {
      navigate("/roteiro/download");
    } else {
      setError(true);
    }
  };

  const handleSave = () => {
    onSave();
  };

  return (
    <Styles.Container>
      <Header
        handleBack={() => navigate("/roteiro/passo-4")}
        btnLabel="Voltar"
      />
      <Styles.Content>
        <Styles.WrapperTitle>
          <Styles.Title>Meu roteiro inteligente</Styles.Title>
        </Styles.WrapperTitle>
      </Styles.Content>
      <Styles.WrapperResumeContent>
        <Styles.ResumeContent>
          {data.map((item: ResumeList, idx: number) => (
            <Styles.WrapperBar key={uniqueId()}>
              <Styles.BarWrapper idx={idx}>
                <Styles.Bar idx={idx} />
                <Styles.Img src={tangramIconList[checkTangramIconIdx(idx)]} />
                <Styles.Background />
                <Styles.Label>{`DIA ${sanitizeNumber(idx + 1)}`}</Styles.Label>
                <Styles.LabelHover>{`DIA ${sanitizeNumber(
                  idx + 1
                )}`}</Styles.LabelHover>
                <Styles.BackgroundHover />
                <Styles.Resume>
                  {item.resume.map((res: string) => (
                    <li key={uniqueId()}>{res}</li>
                  ))}
                </Styles.Resume>
              </Styles.BarWrapper>
            </Styles.WrapperBar>
          ))}
        </Styles.ResumeContent>
      </Styles.WrapperResumeContent>
      <Styles.Actions>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => navigate("/roteiro/adjust")}
        >
          Ajustar
        </Button>
        <Button onClick={handleSave}>Finalizar</Button>
      </Styles.Actions>
    </Styles.Container>
  );
};
