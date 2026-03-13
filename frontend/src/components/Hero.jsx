import bgHome from "../img/bg-home.png";
import HeaderMenu from "./HeaderMenu";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <HeaderMenu />
    </section>
  );
};

export default Hero;
