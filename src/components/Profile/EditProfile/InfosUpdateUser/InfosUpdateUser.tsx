import { Input } from '../../../Input/Input';
import { EditProfileContext } from '../../../../contexts/ContextsFiles/EditProfile';
import { useContext, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import clsx from 'clsx';
import { WarningCircle } from 'phosphor-react';

export function InfosUpdateUser() {
  const {
    name, nameUser, contactUser, localUser, interestsUser, aboutUser,
    setName, setNameUser, setContactUser, setLocalUser, setInterestsUser, setAboutUser
  } = useContext(EditProfileContext);
  const [errorEdit, setErrorEdit] = useState(false);

  return (
    <>
      <Input
        className={"w-99 h-14 mx-6 mt-2 p-4 border border-P300 rounded-xl outline-none"}
        placeholder={"Nome"}
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className={
        clsx("w-99 h-14 mx-6 mt-2 border border-P300 rounded-xl flex items-center", {
          "border-R100": errorEdit
        })
      }>
        <Input
          className={"w-99 h-14 p-4 rounded-xl border-none outline-none bg-transparent"}
          placeholder={"Nome de Usuário"}
          type={"text"}
          value={nameUser}
          onChange={(e) => setNameUser(e.target.value)}
        />
        {errorEdit &&
          <WarningCircle size={28} color="#b3261e" weight="fill" />
        }
      </div>

      <Input
        className={"w-99 h-14 mx-6 mt-2 p-4 bg-B30 rounded-xl outline-none cursor-not-allowed"}
        placeholder={"E-mail"}
        type={"email"}
        value={''}
        onChange={() => { }}
      />

      <ReactInputMask
        className="w-99 h-14 mx-6 mt-2 p-4 border border-P300 rounded-xl outline-none"
        mask="(99) 99999 - 9999"
        placeholder="Telefone"
        type="text"
        // value={''}
        onChange={(e) => setContactUser(e.target.value)}
      />

      <Input
        className={"w-99 h-14 mx-6 mt-2 p-4 border border-P300 rounded-xl outline-none"}
        placeholder={"Localidade"}
        type={"text"}
        value={localUser}
        onChange={(e) => setLocalUser(e.target.value)}
      />

      <Input
        className={
          clsx("w-99 h-14 mx-6 mt-2 p-4 border border-P300 rounded-xl outline-none transition-colors duration-700", {
            "bg-P300 text-white": interestsUser !== ''
          })
        }
        placeholder={"Interesses"}
        type={"text"}
        value={interestsUser}
        onChange={(e) => setInterestsUser(e.target.value)}
      />

      <textarea
        className={
          clsx("w-99 h-44 mx-6 mt-2 p-4 resize-none border border-P300 rounded-xl outline-none transition-colors duration-700", {
            "bg-P300 text-white": aboutUser !== ''
          })
        }
        placeholder={"Sobre"}
        value={aboutUser}
        onChange={(e) => setAboutUser(e.target.value)}
      />
    </>
  );
}