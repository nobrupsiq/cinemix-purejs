import bgHome from "../img/bg-home.png";
import HeaderMenu from "./HeaderMenu";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <HeaderMenu />
      <div className="p-page relative ">
        <span className="badge-now">• Em cartaz agora</span>

        {/* GLOW */}
        <div className="absolute left-40 top-24 w-72 h-72 bg-yellow-400/40 blur-[280px]" />
        <div className="absolute left-56 top-32 w-56 h-56 bg-yellow-300/30 blur-[140px]" />

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
  );
};

export default Hero;
