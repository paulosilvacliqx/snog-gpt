import { InstagramLogo } from 'phosphor-react';
import earthIcon from '../../../../assets/icons/earth.svg';
import facebookcon from '../../../../assets/icons/facebook.svg';
import linkedincon from '../../../../assets/icons/linkedin.svg';

export function SocialUser() {
  return (
    <>
      <p className="mx-6 my-4 text-B300 text-base font-medium">Social</p>

      <section className="flex gap-7 mx-6 my-1">
        <div className="w-52 h-14 p-4 border border-P300 rounded-xl flex items-center cursor-pointer">
          <img src={earthIcon} alt="Global" />
          <span className="text-B80 text-base font-medium ml-4">Website Url</span>
        </div>
        <div className="w-52 h-14 p-4 border border-P300 rounded-xl flex items-center cursor-pointer">
          <InstagramLogo size={24} color="#d84315" weight="bold" aria-label="Instagram" />
          <span className="text-B80 text-base font-medium ml-4">Instagram Url</span>
        </div>
      </section>

      <section className="flex gap-7 mx-6 my-1">
        <div className="w-52 h-14 p-4 border border-P300 rounded-xl flex items-center cursor-pointer">
          <img src={facebookcon} alt="Facebook" />
          <span className="text-B80 text-base font-medium ml-4">Facebook Url</span>
        </div>
        <div className="w-52 h-14 p-4 border border-P300 rounded-xl flex items-center cursor-pointer">
          <img src={linkedincon} alt="Linkedin" />
          <span className="text-B80 text-base font-medium ml-4">Linkedin Url</span>
        </div>
      </section>
    </>
  );
}