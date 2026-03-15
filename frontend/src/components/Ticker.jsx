import Marquee from "react-fast-marquee";

export default function Ticker() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-mu py-3 text-black font-display tracking-[2px] mb-4 ">
      <div
        className="container mx-auto mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
[-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        <Marquee
          speed={60}
          gradient
          gradientColor={["text-mu"]}
          gradientWidth={180}
          pauseOnHover
        >
          <span className="mx-8">• Reserve sua poltrona</span>
          <span className="mx-8">• Combos exclusivos</span>
          <span className="mx-8">• Programa fidelidade</span>
          <span className="mx-8">• Novidades toda semana</span>
          <span className="mx-8">• IMAX - 4DX - VIP</span>
          <span className="mx-8">• Compre ingressos online</span>

          <span className="mx-8">• Reserve sua poltrona</span>
          <span className="mx-8">• Combos exclusivos</span>
          <span className="mx-8">• Programa fidelidade</span>
          <span className="mx-8">• Novidades toda semana</span>
          <span className="mx-8">• IMAX - 4DX - VIP</span>
          <span className="mx-8">• Compre ingressos online</span>
        </Marquee>
      </div>
    </div>
  );
}
