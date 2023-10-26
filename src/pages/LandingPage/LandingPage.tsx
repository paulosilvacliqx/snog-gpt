import { Header } from "../../components/Header/Header";
import { CarouselLanding } from "../../components/Landing/CarouselLanding/CarouselLanding";
import { DigitalTripness } from "../../components/Landing/DigitalTripness/DigitalTripness";
import { InstructionsTripness } from "../../components/Landing/InstructionsTripness/InstructionsTripness";
import { MemorableExperience } from "../../components/Landing/MemorableExperience/MemorableExperience";
import { TravelTripness } from "../../components/Landing/TravelTripness/TravelTripness";
import { Button } from "../../components/Button/Button";
import { Chat } from "phosphor-react";

export function LandingPage() {
  return (
    <div className="max-h-60 max-w-[1500px] m-auto">
      <Header />
      <CarouselLanding />
      <DigitalTripness />
      <TravelTripness />
      <InstructionsTripness />
      <MemorableExperience />
    </div>
  );
}
