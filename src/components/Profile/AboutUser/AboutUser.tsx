import { DeviceMobile, EnvelopeSimple, InstagramLogo } from 'phosphor-react';
import earthIcon from '.././../../assets/icons/earth.svg';
import facebookcon from '.././../../assets/icons/facebook.svg';
import linkedincon from '.././../../assets/icons/linkedin.svg';

export function AboutUser() {
  return (
    <main className="w-90 h-130 bg-white p-6 mb-6 float-left">
      <h1 className="text-B300 text-base font-bold">Sobre</h1>

      <p className="w-72 text-B70 text-sm font-normal mt-4">
        Lorem ipsum dolor sit amet consectetur. At vulputate at risus habitant venenatis. 
        Dignissim enim ultricies dolor nibh nunc mus. Varius felis maecenas tellus dignissim 
        lacus dictum sed malesuada. Ultricies sed nunc lectus viverra duis placerat facilisis congue faucibus. 
        Condimentum in pellentesque quam amet vehicula id eget vitae.
      </p>

      <h1 className="text-B90 text-base font-semibold mt-8">Social</h1>
      <div className="flex items-center mt-4">
        <img src={earthIcon} alt="Global" />
        <span className="text-sm text-B70 font-medium ml-3">https://codedthemes.com/</span>
      </div>

      <div className="flex items-center mt-4">
        <InstagramLogo size={24} color="#d84315" weight="bold" aria-label="Instagram" />
        <span className="text-sm text-B70 font-medium ml-3">https://www.instagram.com/codedth...</span>
      </div>

      <div className="flex items-center mt-4">
        <img src={facebookcon} alt="Facebook" />
        <span className="text-sm text-B70 font-medium ml-3">https://www.facebook.com/codedth...</span>
      </div>

      <div className="flex items-center mt-4">
        <img src={linkedincon} alt="Linkedin" />
        <span className="text-sm text-B70 font-medium ml-3">https://in.linkedin.com/company/coded...</span>
      </div>

      <div className="w-[308px] h-[1px] bg-B70 mt-4" />

      <h1 className="text-B90 text-base font-semibold mt-8">Contato</h1>
      <div className="flex items-center mt-4">
        <EnvelopeSimple size={24} color="#a3a3a3" weight="bold" />
        <span className="text-sm text-B70 font-medium ml-3">m.alberto@email.com.br</span>
      </div>

      <div className="flex items-center mt-4">
        <DeviceMobile size={24} color="#a3a3a3" weight="bold" />
        <span className="text-sm text-B70 font-medium ml-3">(00) 00000 - 0000</span>
      </div>
    </main>
  );
}