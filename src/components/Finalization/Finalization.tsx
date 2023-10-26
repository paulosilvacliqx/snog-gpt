import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import finalizationImg from "../../assets/imgs/bg-finalization.png";
import { useNavigate } from "react-router-dom";

export function Finalization() {
  const navigate = useNavigate();

  function handleBackHome() {
    navigate("/");
  }

  return (
    <main className="w-full bg-P50">
      <Header />

      <div className="w-full h-152 bg-P50 flex flex-col items-center">
        <section
          className="w-1000 h-150 flex flex-col pl-20 pt-40 text-left"
          style={{
            backgroundImage: `url(${finalizationImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="w-105 font-bold text-5xl text-white">
            Uma nova experiência memorável começa agora!!!
          </h1>
          <p className="w-96 font-light text-2xl text-white pt-8">
            Em breve um de nossos especialistas entrará em contato para acertar
            os últimos detalhes da sua jornada.
          </p>
          <Button
            className="w-80 h-14 mt-16 bg-white rounded-full font-medium text-xl text-P300 cursor-pointer"
            title="Ir para home"
            onClick={handleBackHome}
          />
        </section>
      </div>
    </main>
  );
}
