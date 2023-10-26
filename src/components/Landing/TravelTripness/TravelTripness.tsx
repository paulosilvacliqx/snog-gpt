import tripnessTravel from '../../../assets/imgs/tripness-travel.png';

export function TravelTripness() {
  return (
    <main className="w-full h-full grid gap-4 grid-cols-2 bg-P50 py-60">
      <div className="flex items-center justify-center">
        <img className="w-99.5 h-98 max-[1180px]:h-110" src={tripnessTravel} alt="Tripness Viagem" />
      </div>

      <div className="ml-9">
        <h1 className="font-normal text-P300 text-5xl ">//trip.ness é um estado de espírito, um estilo de vida,</h1>
        <h1 className="font-bold text-P300 text-5xl">é uma constante viagem</h1>
        <p className="w-100 font-normal max-[1100px]:w-full text-B10 text-xl mt-8">Somos uma curadoria de experiências e vivências em viagens.Construímos momentos únicos, memórias emocionantes e inesquecíveis para aqueles que buscam viver suas paixões e conhecer novos mundos.</p>
        <p className="w-100 font-normal max-[1100px]:w-full text-B10 text-xl mt-8">Somos apaixonados por viagens e por ajudar pessoas a encontrarem suas paixões por aí, mundo afora.</p>
      </div>
    </main>
  );
}


