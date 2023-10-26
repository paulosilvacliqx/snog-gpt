import { useContext, useEffect, useState } from "react";
import { TangranContext } from "../../../contexts/ContextsFiles/Tangran";
import { UserDataContext } from "../../../contexts/ContextsFiles/UserData";
import { findIndex } from "lodash";
import { ModaGroup } from "../../../assets/icons/ModaGroup";
import { ArteGroup } from "../../../assets/icons/ArteGroup";
import { NaturezaGroup } from "../../../assets/icons/NaturezaGroup";
import { AventuraGroup } from "../../../assets/icons/AventuraGroup";
import { VoluntariadoGroup } from "../../../assets/icons/VoluntariadoGroup";
import { FotografiaGroup } from "../../../assets/icons/FotografiaGroup";
import { MusicaGroup } from "../../../assets/icons/MusicaGroup";
import { EspiritualidadeGroup } from "../../../assets/icons/EspiritualidadeGroup";
import { EmpreenderGroup } from "../../../assets/icons/EmpreenderGroup";
import { InovacaoGroup } from "../../../assets/icons/InovacaoGroup";
import { TecnologiaGroup } from "../../../assets/icons/TecnologiaGroup";
import { GastronomiaGroup } from "../../../assets/icons/GastronomiaGroup";
import { CulturaGroup } from "../../../assets/icons/CulturaGroup";
import { FeGroup } from "../../../assets/icons/FeGroup";
import { DesignGroupTangran } from '../../../assets/icons/DesignGroupTangran';
import axios from "axios";
import { handleGetListTangran } from "../../../services/apis/TangranList";

export function TangranGroups() {
  const { accessToken } = useContext(UserDataContext)
  const { setDataTangran, dataTangran, setSelectedWords, selectedWords, newSelectedValue, setWordValues, wordValues, newSelectedWordValues } = useContext(TangranContext)

  useEffect(() => {
    handleGetListTangran(accessToken, setDataTangran);
  }, [accessToken])

  function handleSelectedValuesTangran(id: number, name: string) {
    const idx = findIndex(selectedWords, item => item === id);
    const idxName = findIndex(wordValues, item => item === name);

    if (idx !== -1) {
      newSelectedValue.splice(idx, 1)
    } else if (newSelectedValue.length < 5) {
      newSelectedValue.push(id)
    }

    setSelectedWords(newSelectedValue);

    if (idxName !== -1) {
      newSelectedWordValues.splice(idx, 1)
    } else if (newSelectedWordValues.length < 5) {
      newSelectedWordValues.push(name)
    }

    setWordValues(newSelectedWordValues)
  }

  return (
    <div>
      <div>
        <DesignGroupTangran />
        <span onClick={() => handleSelectedValuesTangran(1, 'Design')} className="absolute top-[22.25rem] left-[6.25rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 1 && item.tangram_item_name })}</span>
      </div>

      <div >
        <ModaGroup />
        <span onClick={() => handleSelectedValuesTangran(3, 'Moda')} className="absolute top-[23rem] left-[24.125rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 3 && item.tangram_item_name })}</span>
      </div>

      <div>
        <NaturezaGroup />
        <span onClick={() => handleSelectedValuesTangran(7, 'Natureza')} className="absolute top-[22rem] left-[38.938rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 7 && item.tangram_item_name })}</span>
      </div>

      <div>
        <AventuraGroup />
        <span onClick={() => handleSelectedValuesTangran(9, 'Aventura')} className="absolute top-[21.563rem] left-[54.313rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 9 && item.tangram_item_name })}</span>
      </div>

      <div>
        <VoluntariadoGroup />
        <span onClick={() => handleSelectedValuesTangran(6, 'Voluntariado')} className="absolute top-[24.5rem] left-[66.065rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 6 && item.tangram_item_name })}</span>
      </div>

      <div>
        <ArteGroup />
        <span onClick={() => handleSelectedValuesTangran(2, 'Arte')} className="absolute top-[33.625rem] left-[15.938rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 2 && item.tangram_item_name })}</span>
      </div>

      <div>
        <FotografiaGroup />
        <span onClick={() => handleSelectedValuesTangran(8, 'Fotografia')} className="absolute top-[35rem] left-[29.951rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 8 && item.tangram_item_name })}</span>
      </div>

      <div>
        <MusicaGroup />
        <span onClick={() => handleSelectedValuesTangran(10, 'Música')} className="absolute top-[30.844rem] left-[49.5rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 10 && item.tangram_item_name })}</span>
      </div>

      <div>
        <EspiritualidadeGroup />
        <span onClick={() => handleSelectedValuesTangran(5, 'Espiritualidade')} className="absolute top-[34.776rem] left-[63.483rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 5 && item.tangram_item_name })}</span>
      </div>

      <div>
        <EmpreenderGroup />
        <span onClick={() => handleSelectedValuesTangran(15, 'Empreender')} className="absolute top-[42.8rem] left-[3.376rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 15 && item.tangram_item_name })}</span>
      </div>

      <div>
        <InovacaoGroup />
        <span onClick={() => handleSelectedValuesTangran(14, 'Inovação')} className="absolute top-[52.541rem] left-[12.761rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 14 && item.tangram_item_name })}</span>
      </div>

      <div>
        <TecnologiaGroup />
        <span onClick={() => handleSelectedValuesTangran(13, 'Tecnologia')} className="absolute top-[45.375rem] left-[24.292rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 13 && item.tangram_item_name })}</span>
      </div>

      <div>
        <GastronomiaGroup />
        <span onClick={() => handleSelectedValuesTangran(12, 'Gastronomia')} className="absolute top-[43.994rem] left-[43.392rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 12 && item.tangram_item_name })}</span>
      </div>

      <div>
        <CulturaGroup />
        <span onClick={() => handleSelectedValuesTangran(11, 'Cultura')} className="absolute top-[49.494rem] left-[59.2rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 11 && item.tangram_item_name })}</span>
      </div>

      <div>
        <FeGroup />
        <span onClick={() => handleSelectedValuesTangran(4, 'Fé')} className="absolute top-[49.375rem] left-[74.5rem] text-2xl text-white font-bold uppercase cursor-pointer">{dataTangran.map((item) => { return item.tangram_item_id === 4 && item.tangram_item_name })}</span>
      </div>
    </div>
  );
}