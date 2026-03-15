import HeaderMenu from "./HeaderMenu";
import Ticker from "./Ticker";
const Hero = () => {
  return (
    <>
      <section className="min-h-screen relative flex flex-col justify-center bg-cover bg-center overflow-hidden">
        <HeaderMenu />

        <div className="p-page relative container mx-auto ">
          <span className="badge-now">• Em cartaz agora</span>

          {/* GLOW */}
          <div className="absolute left-40 top-40 w-40 h-30 bg-mu blur-[120px]" />

          <h2 className="uppercase text-9xl text-stroke font-display leading-none">
            Cinema
          </h2>
          <h1 className="font-display uppercase text-[9rem] leading-[0.85] text-mu font-bold">
            Reimaginado.
          </h1>
          <div className="text-gr w-105 mt-8 mb-8 font-body">
            <p>Uma experiência cinematográfica que vai além da tela.</p>
            <p>
              Escolha seu filme, reserve seu lugar e mergulhe no universo do
              cinema.
            </p>
          </div>
          <nav className="flex gap-4">
            <button className="btn-primary">
              <span>Ver programação</span>
            </button>
            <button className="btn-secondary">
              <span>Explorar filmes</span>
            </button>
          </nav>
        </div>
      </section>
      <Ticker />
    </>
  );
};

export default Hero;
