import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { TangranGroups } from "./TangranGroups/TangranGroups";
import { TangranContext } from "../../contexts/ContextsFiles/Tangran";
import { UserDataContext } from "../../contexts/ContextsFiles/UserData";
import { ExperienceListContext } from "../../contexts/ContextsFiles/ExperienceList";
import backIcon from "../../assets/icons/back-colored-icon.svg";
import clsx from "clsx";
import axios from "axios";

export function TangranWords() {
  const { accessToken } = useContext(UserDataContext);
  const { selectedWords, newSelectedValue } = useContext(TangranContext);
  const { setExperienceItem } = useContext(ExperienceListContext);
  const navigate = useNavigate();

  async function handleSendWordsToExperience() {
    if (accessToken && newSelectedValue.length >= 3) {
      await axios
        .post(
          `${import.meta.env.VITE_APP_WEB_API}experience/filter_list`,
          {
            tangram_list_id: selectedWords,
          },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        )
        .then((response) => {
          setExperienceItem(response.data.data.second_line);
          if (response.data.success === true) {
            navigate("/experiencias");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <main className="w-full bg-P50">
      <Header />

      <div className="w-full h-152 bg-P50 flex flex-col items-center">
        <h1 className="font-bold text-P300 text-5xl">
          Seus momentos começam aqui
        </h1>
        <p className="font-normal text-P300 text-2xl mt-3">
          Escolha abaixo de 03 a 05 palavras que dão match com o seu estado de
          espírito atual
        </p>
        <TangranGroups />
      </div>

      <div className="flex items-center justify-center -mt-20">
        <Button
          onClick={handleSendWordsToExperience}
          title="Ver Experiências"
          className={clsx(
            "w-80 h-14 rounded-full font-normal text-white text-xl transition-all duration-300 hover:opacity-90",
            {
              "bg-P300 text-white": newSelectedValue.length >= 3,
              "bg-B40 text-P200 cursor-not-allowed":
                newSelectedValue.length < 3,
            }
          )}
        />
      </div>
    </main>
  );
}
