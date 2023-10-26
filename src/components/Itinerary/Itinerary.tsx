import { FC, useCallback, useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import parse from "html-react-parser";

import imgItineraryTitle from "../../assets/imgs/itinerary-title.png";
import imgItineraryFooter from "../../assets/imgs/itinerary-footer.png";
import imgThank from "../../assets/imgs/thank-img.png";
import logoTripness from "../../assets/imgs/logo-tripness-white.png";
import imgTripnessInfo from "../../assets/imgs/tripness-info-img.png";
import imgItineraryName from "../../assets/imgs/itinerary-name-img.png";

import bgImg from "../../assets/imgs/bg-profile.png";

import { X } from "phosphor-react";
import { getItineraryById } from "../../services/Itineraries/service";
import { Itinerary as ItineraryType } from "../../services/Itineraries/type";

import { MenuProfile } from "../MenuProfile/MenuProfile";

var REGEX = new RegExp(String.fromCharCode(160), "g");

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1300px;
  position: absolute;
  background-color: #ffffff;
  top: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding: 32px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
const Text = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 24px;
  color: #383838;
  padding: 64px 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  min-height: calc(100vh - 350px);
`;

const LoadingWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 111px;
  height: 56px;
  background: #78c6bf;
  border-radius: 50px;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;

  &:not([disabled]):hover {
    opacity: 0.7;
  }

  &:not([disabled]):focus {
    opacity: 0.9;
    outline: none;
  }
`;

const ThanksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const TripnessInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItineraryNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ItineraryNameContent = styled.div`
  display: flex;
  height: calc(100vh - 850px);
`;

const ThanksContent = styled.div`
  display: flex;
  height: calc(100vh - 900px);
`;

const TripnessInfoContent = styled.div`
  display: flex;
  height: calc(100vh - 760px);
`;

const ItineraryName = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  color: #ffffff;
  width: 500px;
  position: absolute;
  top: 237px;
  padding-left: 64px;
  z-index: 2;

  span {
    font-size: 48px;
  }

  p {
    font-size: 24px;
    margin-bottom: 2px;
    opacity: 0.8;
  }
`;

export const Itinerary: FC = () => {
  const componentRef: any = useRef();

  const navigate = useNavigate();
  const { itinerary_id } = useParams<{ itinerary_id: string }>();

  let counterControlApiGet = 0;

  const [loading, setLoading] = useState<boolean>(false);
  const [itineraryResponse, setItineraryResponse] =
    useState<ItineraryType | null>();

  const getItineraries = useCallback(async () => {
    counterControlApiGet += 1;
    if (counterControlApiGet === 1) {
      setLoading(true);
      const itinerariesResponse = await getItineraryById(itinerary_id || "");
      setItineraryResponse(itinerariesResponse);
      setTimeout(() => setLoading(false), 1000);
    }
  }, []);

  useEffect(() => {
    getItineraries();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownload = () => {
    handlePrint();
  };

  const sanitizeText = (text: string) => {
    const textSplit = text.split("\n\n");
    return textSplit;
  };

  return (
    <main className="w-full h-screen bg-black flex flex-col items-center overflow-auto relative mb-20">
      <div
        className=" h-90"
        style={{
          width: 1300,
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="flex items-center justify-between px-14 py-9">
          <MenuProfile />
        </div>
      </div>
      <Container>
        <Content ref={componentRef}>
          <Header>
            <button
              className="flex flw-row items-center mb-8 ml-3"
              onClick={() => navigate("/meusroteiros")}
            >
              <X size={24} className="text-P300" />
            </button>
            <Button
              className="flex flw-row items-center mb-8"
              onClick={handleDownload}
              disabled={loading}
            >
              Baixar
            </Button>
          </Header>

          <ItineraryNameWrapper>
            <img src={imgItineraryName} alt="Imagem nome roteiro" />

            <ItineraryName>
              <span>Meu roteiro Snog</span>
              {(itineraryResponse?.itinerary_name && (
                <span>{itineraryResponse.itinerary_name}</span>
              )) || <CircularProgress />}
              <p style={{ marginTop: 24 }}>
                Viaje, explore, e aprenda vivências e
              </p>
              <p>histórias inesquecíveis em experiências</p>
              <p>que moldam a alma.</p>
            </ItineraryName>
            <ItineraryNameContent />
            <img src={imgItineraryFooter} alt="Imagem footer roteiro" />
          </ItineraryNameWrapper>

          <TripnessInfoWrapper>
            <img src={imgTripnessInfo} alt="Imagem informação roteiro" />
            <TripnessInfoContent />
            <img src={imgItineraryFooter} alt="Imagem footer roteiro" />
          </TripnessInfoWrapper>

          <img
            src={imgItineraryTitle}
            alt="Imagem título roteiro"
            style={{ marginLeft: 20, marginTop: 200 }}
          />

          {!loading && itineraryResponse?.itinerary_data && (
            <Text>
              {sanitizeText(itineraryResponse.itinerary_data).map(
                (text: string) => {
                  return <p style={{ marginBottom: 16 }}>{parse(text)}</p>;
                }
              )}
            </Text>
          )}

          {loading && (
            <LoadingWrapper>
              <CircularProgress />
            </LoadingWrapper>
          )}

          <img src={imgItineraryFooter} alt="Imagem footer roteiro" />

          <ThanksWrapper>
            <img src={imgThank} alt="Imagem agradecimento roteiro" />
            <ThanksContent />
            <img src={imgItineraryFooter} alt="Imagem footer roteiro" />
          </ThanksWrapper>
        </Content>
      </Container>
    </main>
  );
};
