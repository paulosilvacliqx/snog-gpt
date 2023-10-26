import { useEffect, useContext } from "react";
import { Topbar } from "./Topbar/Topbar";
import { DescriptionProfile } from "./DescriptionProfile/DescriptionProfile";
import { Button } from "../Button/Button";
import { ImageSquare } from "phosphor-react";
import { AboutUser } from "./AboutUser/AboutUser";
import { PostsUser } from "./PostsUser/PostsUser";
import { ProfileContext } from "../../contexts/ContextsFiles/Profile";
import bgImg from '../../assets/imgs/bg-profile.png';
import clsx from "clsx";

export function Profile() {
  const { scrollTop, setScrollTop, setProfile } = useContext(ProfileContext);

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    setProfile(true);
  }, []);

  return (
    <main className="w-full h-full bg-P50 flex flex-col items-center">
      <div className="w-full h-90" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
        <Topbar />
      </div>

      <div className={
        clsx("-mt-48 scroll-smooth", {
          "-mt-80": scrollTop > 20
        })
      }>
        <Button
          title="Trocar Foto"
          className="w-36 h-10 rounded-full flex items-center justify-center float-right bg-white mt-12 text-P300 text-sm font-semibold"
          icon={<ImageSquare size={24} className="mr-3 text-P300" weight="bold" />}
        />

        <DescriptionProfile />
      </div>

      <div className={
        clsx("w-1200 mt-6", {
          "-mt-6": scrollTop > 20
        })
      }>
        <AboutUser />
        <PostsUser />
      </div>
    </main>
  );
}