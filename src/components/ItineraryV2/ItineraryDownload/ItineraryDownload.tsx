import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useReactToPrint } from "react-to-print";

import * as Styles from "./ItineraryDownload.styles";
import { Header } from "../Header/Header";
import Image3 from "../assets/pdf/image-3.png";

import { ItineraryContext } from "../../../contexts/ContextsFiles/Itinerary";
import { isEmpty, uniqueId } from "lodash";

type ResumeList = {
  title: string;
  resume: string[];
};

export const ItineraryDownload = () => {
  const navigate = useNavigate();

  const componentRef: any = useRef();

  const [data, setData] = useState<ResumeList[]>([]);
  const { itineraryData, itineraryDataResponse } = useContext(ItineraryContext);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (!itineraryData.content) {
      // navigate("/");
    }
  }, []);

  const handleCloseModal = () => {
    setOpenDialog(false);
  };

  const handleOpenModal = () => {
    setOpenDialog(true);
  };

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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownload = () => {
    handlePrint();
  };

  return (
    <>
      <Styles.Container>
        <Header handleBack={() => navigate("/")} btnLabel="Fechar" />
        <Styles.Title>PRONTO!</Styles.Title>
        <Styles.SubTitle>
          Seu roteiro criado com o auxilio de uma inteligencia artificial está
          <br />
          disponível para download abaixo.
        </Styles.SubTitle>
        <Styles.Content>
          <Styles.WrapperButtonDownload>
            <Styles.ButtonDownload onClick={handleOpenModal}>
              <span>Baixar</span>
            </Styles.ButtonDownload>
          </Styles.WrapperButtonDownload>
          <Styles.SubTitleFooter>
            Você pode também olhar seu histórico de roteiros no seu perfil
          </Styles.SubTitleFooter>
        </Styles.Content>
      </Styles.Container>
      <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
        <Styles.Dialog>
          <Dialog.Content className="dialog-content fixed h-[80vh] w-9/12 mt-8 mb-8 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll scrollbar">
            <Styles.ModalActions>
              <Styles.Button onClick={handleDownload}>Baixar</Styles.Button>
              <Dialog.Close>
                <X
                  size={24}
                  weight="bold"
                  aria-label="Fechar"
                  onClick={handleCloseModal}
                />
              </Dialog.Close>
            </Styles.ModalActions>
            <Styles.ModalContainer>
              <Styles.ModalContent ref={componentRef}>
                <Styles.ImgModal src={Image3} alt="Imagem 3" />
                <Styles.Text>
                  Aqui está seu roteiro de viagem. Com base nas suas
                  preferências:
                </Styles.Text>
                {data.map((item: ResumeList, idx: number) => (
                  <>
                    <Styles.Text
                      style={{ marginTop: 48 }}
                    >{`DIA ${sanitizeNumber(idx + 1)}`}</Styles.Text>

                    {item.resume.map((res: string) => (
                      <Styles.Text key={uniqueId()}>{res}</Styles.Text>
                    ))}
                  </>
                ))}
              </Styles.ModalContent>
            </Styles.ModalContainer>
          </Dialog.Content>
        </Styles.Dialog>
      </Dialog.Root>
    </>
  );
};
