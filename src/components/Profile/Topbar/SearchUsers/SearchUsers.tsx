import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import searchIcon from '../../../../assets/icons/search.svg';;

export function SearchUsers() {
  const [searchUsers, setSearchUsers] = useState('');

  return (
    <Dialog.Root>
      <Dialog.Trigger type="button">
        <img src={searchIcon} alt="Busque por usuários" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0" />
        <Dialog.Content className="absolute w-[78rem] h-12 rounded-xl bg-white left-1/4 -translate-x-[17rem] -translate-y-[12.8rem]">
          <div className="w-1200 h-12 flex flex-row items-center p-3 rounded-xl">
            <img src={searchIcon} alt="Busque por usuários" />
            <input
              className="w-[78rem] h-12 bg-transparent outline-none ml-4 text-base text-B80 font-normal"
              type="text"
              placeholder="Busque por usuários"
              value={searchUsers}
              onChange={(e) => setSearchUsers(e.target.value)}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}