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
import { SaveItinerary } from "../../../services/Itineraries/type";
import { Modal } from "./Modal";

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
  const { itineraryDataResponse, itineraryData } = useContext(ItineraryContext);
  const [data, setData] = useState<ResumeList[]>([]);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedResume, setSelectedResume] = useState<any>(null);

  useEffect(() => {
    if (!itineraryData.content) {
      navigate("/");
    }
  }, []);

  const format2 = () => {
    const messageSplit = itineraryDataResponse.message.content.split("\n\n");
    const newData: ResumeList[] = [];

    let resumeItem: ResumeList = { title: "", resume: [] };
    resumeItem.resume = [];
    messageSplit.forEach((item) => {
      if (item.includes("Dia")) {
        resumeItem = { title: "", resume: [] };
        const itemSplit = item.split("\n");
        itemSplit.forEach((day, idx) => {
          if (idx !== 0) {
            resumeItem.resume.push(day.replace("-", ""));
          }
        });
        newData.push(resumeItem);
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
    <>
      {!openModal && (
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
                    <Styles.Img
                      src={tangramIconList[checkTangramIconIdx(idx)]}
                    />
                    <Styles.Background />
                    <Styles.Label>{`DIA ${sanitizeNumber(
                      idx + 1
                    )}`}</Styles.Label>
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
          <Styles.WrapperResumeContentMobile>
            {data.map((item: ResumeList, idx: number) => (
              <Styles.WrapperButton
                key={uniqueId()}
                onClick={() => {
                  setSelectedResume({ idx: idx, item: item });
                  setOpenModal(true);
                }}
              >
                <Styles.ItemButton idx={idx} />
                <div id="label">{`DIA ${sanitizeNumber(idx + 1)}`}</div>
                <Styles.ImgMobile
                  id="img"
                  src={tangramIconList[checkTangramIconIdx(idx)]}
                />

                <Styles.Gradient />
              </Styles.WrapperButton>
            ))}
          </Styles.WrapperResumeContentMobile>

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
      )}
      {openModal && selectedResume && (
        <Modal
          text={selectedResume.item.resume.map((res: string) => (
            <li key={uniqueId()}>{res}</li>
          ))}
          idx={selectedResume.idx}
          day={`Dia ${sanitizeNumber(selectedResume.idx + 1)}`}
          onClose={() => setOpenModal(false)}
        >
          <Styles.ImgMobile
            src={tangramIconList[checkTangramIconIdx(selectedResume.idx)]}
          />
        </Modal>
      )}
    </>
  );
};
