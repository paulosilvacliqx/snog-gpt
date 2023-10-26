import uploadImgProfile from '../../../assets/icons/upload-img-profile.svg';
import { MapPin, ShareNetwork } from 'phosphor-react';
import { Button } from '../../Button/Button';
import { useContext } from 'react';
import { UserDataContext } from '../../../contexts/ContextsFiles/UserData';
import { ProfileContext } from '../../../contexts/ContextsFiles/Profile';
import clsx from 'clsx';
import { EditProfile } from '../EditProfile/EditProfile';

export function DescriptionProfile() {
  const { userData } = useContext(UserDataContext);
  const { scrollTop } = useContext(ProfileContext);

  const urlParamsProfile = location.href.split("/").pop();

  return (
    <main className="w-1200 h-60 pt-24">
      <section className="w-1200 h-36">
        {/* Avatar */}
        <div className={
          clsx("w-52 h-52 bg-white absolute top-44 left-24 flex items-center justify-center", {
            "w-[87px] h-[87px] absolute top-[9.2rem] left-[4.2rem] flex items-center justify-center": scrollTop > 20
          })
        }>

          {userData.photoURL && <img className={
            clsx("w-48 h-48", {
              "w-[5.4rem] h-[5.4rem]": scrollTop > 20
            })
          } src={userData?.photoURL} alt="Imagem de perfil" />}

        </div>

        {/* Upload new Avatar */}
        {scrollTop < 30 &&
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-white left-[260px] top-[338px] absolute shadow-xl">
            <img src={uploadImgProfile} alt="Trocar foto de perfil" />
          </div>
        }

        {/* Descriptions */}

        <div className={
          clsx("w-full h-36 bg-white flex flex-col pl-64 pt-5", {
            "h-[5.75rem] pl-28": scrollTop > 20
          })
        }>

          {/* Infos Users */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="font-semibold text-3xl text-O300">{userData.displayName}</p>
              <span className="font-normal text-xl text-B70 ml-4">@marioalb_</span>
            </div>

            <div className="flex items-center">
              {urlParamsProfile === 'profile' &&
                <EditProfile />
              }

              <Button
                className="w-12 h-12 rounded-full bg-P50 flex items-center justify-center mx-6 hover:opacity-80 transition-all duration-300"
                icon={<ShareNetwork size={24} color="#543f92" weight="bold" />}
              />
            </div>
          </div>

          {scrollTop < 20 &&
            <>
              <div className="flex flex-row items-center mt-4">
                <MapPin size={20} className="text-B70" weight="regular" />
                <span className="font-normal text-sm text-B70 ml-2">São Paulo, SP</span>
              </div>
              <span className="text-BL300 text-sm font-normal mt-2">#viagem #Paris #vidademochileiro #cultura</span>
            </>
          }
        </div>
      </section>

    </main>
  );
}