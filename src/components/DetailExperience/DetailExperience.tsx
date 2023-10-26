import { useNavigate } from "react-router-dom";
import { BackButton } from "../BackButton/BackButton";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { CarouselExperience } from "./CarouselExperience/CarouselExperience";
import { Customize } from "./ConfigureExperience/Customize/Customize";
import { DatesDurationPeople } from "./ConfigureExperience/DatesDurationPeople/DatesDurationPeople";
import backIcon from "../../assets/icons/back-colored-icon.svg";

export function DetailExperience() {
  const navigate = useNavigate();

  function handleBackSelectionExperience() {
    navigate("/experiencias");
  }

  return (
    <main className="w-full bg-P50">
      <Header />

      <div className="grid grid-cols-2 gap-12">
        <CarouselExperience />

        <div className="w-120">
          <DatesDurationPeople />
          <Customize />

          <div className="flex flex-col items-end mr-4 mt-8">
            <span className="text-B10 text-xl font-normal">A partir de</span>
            <strong className="text-B10 text-[32px] font-bold">
              R$ 1.500,00
            </strong>
          </div>

          <div className="flex flex-row items-center mt-2">
            <Button
              title="Adicionar a Sacola"
              className="w-[274px] h-14 rounded-full mr-3 border border-P100 font-medium text-sm text-P100"
            />
            <Button
              title="Comprar"
              className="w-[274px] h-14 rounded-full bg-P100 font-medium text-sm text-white"
            />
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-B10 text-2xl text-center">
        O que está incluso nesta experiência?
      </h1>

      <p className="w-auto mx-20 my-6 font-normal text-base text-B10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, sed
        condimentum luctus amet aenean. Magna neque, integer elementum, interdum
        ultricies lacinia purus sodales convallis. Cras nisi, aliquam enim, quis
        diam. Proin nisi, vestibulum, at congue gravida ultrices vestibulum
        quis. Ipsum et nunc lectus duis massa sit habitant eleifend in.
      </p>
      <p className="w-auto mx-20 my-6 font-normal text-base text-B10">
        Viverra vitae sit consectetur quis arcu orci. Et aliquam ac, dolor
        malesuada metus hendrerit viverra faucibus tristique. Arcu sed tempus
        enim, nisl quisque dignissim nunc aliquet faucibus. Semper non tortor
        convallis egestas diam arcu. Mauris a, in turpis nibh platea integer
        integer netus dolor. Massa cursus risus fames enim nisl id ut faucibus.
        Id etiam risus elementum ut pretium. Pellentesque et elit ac,
        condimentum sapien. Tellus sagittis augue tincidunt et, proin et
        dictumst. Ut diam donec diam enim. Pretium faucibus ut sapien vel. Sem
        non quis porta et. Ante consectetur massa commodo, cursus sed erat
        posuere justo pellentesque. Molestie eget tincidunt adipiscing platea
        vulputate quam lectus magnis. Sodales massa luctus scelerisque quam.
        Elementum, eget varius aliquet nunc pulvinar nullam tempus. Eu, pharetra
        eget pharetra adipiscing ornare. Enim fusce fusce tincidunt odio.
      </p>
    </main>
  );
}
