import parisBg from '../../../../assets/imgs/paris-bg.png';

export function Customize() {
  return (
    <div className="mt-8">
      <p className="text-B10 text-2xl font-normal">Personalize</p>

      <div className="w-110 mt-4 flex flex-nowrap overflow-x-scroll overflow-y-hidden scrollbar-none">
        <div className="min-w-[250px] h-16 mr-4 rounded-[15px] flex flex-col items-center" style={{ backgroundImage: `url(${parisBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '256px 64px' }}>
          <p className="font-semibold text-xl text-white">Ingressos Louvre</p>
          <span className="font-normal text-base text-white">A partir de <strong className="font-semibold text-xl text-white">R$ 500,00</strong></span>
        </div>

        <div className="min-w-[250px] h-16 mr-4 rounded-[15px] flex flex-col items-center grayscale" style={{ backgroundImage: `url(${parisBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '256px 64px' }}>
          <p className="font-semibold text-xl text-white">Ingressos Louvre</p>
          <span className="font-normal text-base text-white">A partir de <strong className="font-semibold text-xl text-white">R$ 500,00</strong></span>
        </div>
        
        <div className="min-w-[250px] h-16 mr-4 rounded-[15px] flex flex-col items-center grayscale" style={{ backgroundImage: `url(${parisBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '256px 64px' }}>
          <p className="font-semibold text-xl text-white">Ingressos Louvre</p>
          <span className="font-normal text-base text-white">A partir de <strong className="font-semibold text-xl text-white">R$ 500,00</strong></span>
        </div>
      </div>
    </div>
  );
}