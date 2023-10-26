import { useContext, useEffect, useState } from 'react';
import { NewPasswordContext } from '../../contexts/ContextsFiles/NewPassword';
import { EyeSlash, X } from 'phosphor-react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { getAuth, updatePassword } from "firebase/auth";
import clsx from 'clsx';
import { ToastError, ToastSuccess } from '../Toastify/ToastifyNotification';

export function NewPassword() {
  const auth = getAuth();
  const user = auth.currentUser;

  const {
    setCurrentPassword, setNewPassword, setConfirmNewPassword, setOpenNewPassword, setSuccessNewPassword,
    currentPassword, newPassword, confirmNewPassword, viewCurrentPassword, setViewCurrentPassword,
    setViewNewPassword, viewNewPassword, setViewConfirmNewPassword, viewConfirmNewPassword
  } = useContext(NewPasswordContext)
  const [disabled, setDisabled] = useState(false);
  const [newPasswordEquals, setNewPasswordEquals] = useState('');

  function handleUpdatePasswordUser(user: any, password: string) {
    setDisabled(true);
    updatePassword(user, newPassword)
      .then(() => {
        setOpenNewPassword(false);
        ToastSuccess("Senha alterada com sucesso")
      }).catch((error) => {
        ToastError("Erro ao trocar senha")
        setDisabled(false);
      });
  }

  useEffect(() => {
    if ((newPassword && confirmNewPassword !== '') && (newPassword !== confirmNewPassword)) {
      setNewPasswordEquals('As senhas devem ser iguais')
    } else {
      setNewPasswordEquals('')
    }
  }, [newPassword, confirmNewPassword])

  useEffect(() => {
    if ((currentPassword === '') && (newPassword === '') && (confirmNewPassword === '')) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [currentPassword, newPassword, confirmNewPassword])

  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-P300 text-4xl font-bold mt-6">Nova Senha</h1>
      <p className="text-P300 text-xl font-normal mt-6">Insira suas novas credenciais de acesso abaixo:</p>

      <div className={
        clsx('w-105 h-14 mt-8 flex flex-row items-center justify-between font-normal text-lg text-white border transition-colors duration-700 border-P300 rounded-xl', {
          'bg-P300 text-white': currentPassword !== ''
        })
      }>
        <Input
          className={
            clsx('w-100 h-12 pl-4 caret-P300 border-none rounded-xl transition-colors duration-700 outline-none', {
              'bg-P300 text-white': currentPassword !== ''
            })
          }
          placeholder="Senha Atual"
          type={viewCurrentPassword ? 'text' : 'password'}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <EyeSlash onClick={() => setViewCurrentPassword(!viewCurrentPassword)} size={28} className={
          clsx('text-white font-bold mr-5 cursor-pointer transition-colors duration-700', {
            'text-P300': currentPassword === ''
          })
        } />
      </div>

      <div className={
        clsx('w-105 h-14 mt-8 flex flex-row items-center justify-between font-normal text-lg text-white border transition-colors duration-700 border-P300 rounded-xl', {
          'bg-P300 text-white': newPassword !== ''
        })
      }>
        <Input
          className={
            clsx('w-100 h-12 pl-4 caret-P300 border-none rounded-xl transition-colors duration-700 outline-none', {
              'bg-P300 text-white': newPassword !== ''
            })
          }
          placeholder="Nova Senha"
          type={viewNewPassword ? 'text' : 'password'}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <EyeSlash onClick={() => setViewNewPassword(!viewNewPassword)} size={28} className={
          clsx('text-white font-bold mr-5 cursor-pointer transition-colors duration-700', {
            'text-P300': newPassword === ''
          })
        } />
      </div>

      <div className={
        clsx('w-105 h-14 mt-8 flex flex-row items-center justify-between font-normal text-lg text-white border transition-colors duration-700 border-P300 rounded-xl', {
          'bg-P300 text-white': confirmNewPassword !== ''
        })
      }>
        <Input
          className={
            clsx('w-100 h-12 pl-4 caret-P300 border-none rounded-xl transition-colors duration-700 outline-none', {
              'bg-P300 text-white': confirmNewPassword !== ''
            })
          }
          placeholder="Confirmação Senha"
          type={viewConfirmNewPassword ? 'text' : 'password'}
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <EyeSlash onClick={() => setViewConfirmNewPassword(!viewConfirmNewPassword)} size={28} className={
          clsx('text-white font-bold mr-5 cursor-pointer transition-colors duration-700', {
            'text-P300': confirmNewPassword === ''
          })
        } />
      </div>

      <p className="font-medium text-sm text-red-600 mt-2 mr-80">{newPasswordEquals}</p>

      <Button
        disabled={disabled}
        onClick={() => handleUpdatePasswordUser(user, newPassword)}
        title={"Salvar"}
        className={
          clsx("w-105 h-14 mt-4 font-medium text-base text-white flex items-center justify-center rounded-full transition-colors duration-700", {
            "bg-P10 text-P200": disabled,
            "bg-GL300 text-white": !disabled
          })
        }
      />
    </main>
  );
}