import { useContext } from 'react'
import { ValuesTripnessContext } from '../../../contexts/ContextsFiles/ValuesTripnessContext'
import { TravelCuration } from './ValuesTripnessNavigation/TravelCuration';
import { UniqueRoutes } from './ValuesTripnessNavigation/UniqueRoutes';
import { GoodTalk } from './ValuesTripnessNavigation/GoodTalk';
import { Destiny } from './ValuesTripnessNavigation/Destiny';
import { Trips } from './ValuesTripnessNavigation/Trips'
import { ValuesTripnessDescription } from './ValuesTripnessDescription/ValuesTripnessDescription'

export function DigitalTripness() {
  const { routes, travelCuration, goodTalk, destiny } = useContext(ValuesTripnessContext);

  return (
    <main className="w-full h-full bg-P50 flex flex-col items-center">
      <h1 className="text-5xl leading-tight text-center font-normal text-P300 mt-8">Vivêncie o estado de espírito</h1>
      <h1 className="text-5xl leading-tight text-center font-bold text-P300">Tripness Digital</h1>

      <div className="flex flex-col items-center mt-24 pb-16">
        <div className="flex flex-row mt-10">
          <TravelCuration />
          <UniqueRoutes />
          <GoodTalk />
          <Destiny />
          <Trips />
        </div>
        <div className="mt-16">
          {

            travelCuration ? <ValuesTripnessDescription description={'Somos especialistas em curadoria de viagens do Brasil e no mundo, promovemos experiências para viajantes dispostos a vivenciar o novo, o extraordinário. Desperte sensações e sentimentos inéditos.'} /> :
              routes ? <ValuesTripnessDescription description={'Desenhamos roteiros únicos e surpreendentes com uma equipe de tripmakers com experiências de viagem em mais de 50 países, cuidadosamente selecionados para potencializar vivências locais e apresentar um lado surpreendente daquele que se imagina. Acreditamos que a viagem começa no planejamento.'} /> :
                goodTalk ? <ValuesTripnessDescription description={'Acreditamos que uma boa conversa, atenta e delicada, é a chave para abrir portas no outro. E que a inspiração é uma fonte de descobertas. Unimos as paixões. Combinamos destinos e perfis. '} /> :
                  destiny ? <ValuesTripnessDescription description={'Para a Tripness, não importa o destino, mas sim o momento. Os seus desejos, curiosidades e expectativas determinam como viver essa viagem e um mesmo lugar que pode ser vivido de inúmeras formas.'} /> :
                    <ValuesTripnessDescription description={'Garantimos a você tudo que precisa para viver um momento único sem se preopcupar com absolutamente nada além de aproveitar cada segundo construíndo sempre memórias emocionantes e inesquecíveis.'} />

          }
        </div>
      </div>
    </main>
  )
}