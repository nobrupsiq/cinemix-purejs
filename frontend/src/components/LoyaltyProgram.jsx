import React from "react";

const Loyaltyprogram = () => {
  return (
    <section className="container mx-auto p-page grid grid-cols-[minmax(0,1fr)_480px] gap-12 items-center mt-20">
      <div>
        <span className="badge-now">Programa fidelidade</span>
        <h2 className="uppercase text-white font-display text-8xl tracking-[2px] mb-4">
          Clube da <br />
          <span className="text-mu">pipoca</span>
        </h2>
        <p className="text-gr max-w-md mb-10 font-body">
          Acumule pontos a cada ingresso e troque por experiências exclusivas,
          combos e ingressos gratuitos. Quanto mais você vai ao cinema, mais
          vantagens você tem.
        </p>
        <button className="btn-primary font-body text-[12px] tracking-[2px]">
          <span>Cadastrar agora</span>
        </button>

        <div className="relative grid gap-8 mt-14 ml-8">
          {/* Line */}
          <div className="absolute -left-7 top-0 bottom-0 w-px bg-mu/40"></div>
          {/* bol */}
          <div className="absolute -left-8.5 top-2 w-3 h-3 rounded-full border border-mu bg-deep shadow-[0_0_10px_rgba(212,160,23,0.5)]"></div>
          <div>
            <span className="uppercase text-mu font-display text-[14px] tracking-[2px]">
              Passo 01
            </span>
            <h4 className="text-2xl text-white uppercase font-display tracking-[2px]">
              Cadastre-se
            </h4>
            <p className="text-gr text-[12px]">
              Crie sua conta gratuitamente em segundos
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-8.5 top-2 w-3 h-3 rounded-full border border-mu bg-deep shadow-[0_0_10px_rgba(212,160,23,0.5)]"></div>
            <span className="uppercase text-mu font-display text-[14px] tracking-[2px]">
              Passo 02
            </span>
            <h4 className="text-2xl text-white uppercase font-display tracking-[2px]">
              Some pontos
            </h4>
            <p className="text-gr text-[12px]">
              Ganhe pontos em cada compra de ingresso ou combo
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-8.5 top-2 w-3 h-3 rounded-full border border-mu bg-deep shadow-[0_0_10px_rgba(212,160,23,0.5)]"></div>
            <span className="uppercase text-mu font-display text-[14px] tracking-[2px]">
              Passo 03
            </span>
            <h4 className="text-2xl text-white uppercase font-display tracking-[2px]">
              Troque por Prêmios
            </h4>
            <p className="text-gr text-[12px]">
              Resgate ingressos, pipocas, bebidas e muito mais
            </p>
          </div>
        </div>
      </div>

      <aside className="bg-mid p-page rounded-2xl border border-mu/50 text-white w-full max-w-120 relative">
        <div className="absolute -top-6 -right-6 bg-mu w-20 h-20 rounded-full flex flex-col items-center justify-center text-black uppercase shadow-[0_0_20px_rgba(212,160,23,0.3)] rotate-6 scale-110">
          <span className="font-display text-[18px]">+2x</span>
          <span className="font-body text-sm font-bold text-[10px]">
            Pontos
          </span>
          <span className="font-body text-sm font-bold text-[10px]">Hoje</span>
        </div>
        <div className="bg-mu w-10 h-7 rounded-sm"></div>
        <div className="my-8">
          <h2 className="text-6xl font-display tracking-[2px] text-mu uppercase">
            4.280
          </h2>
          <span className="text-gr font-body text-[10px] tracking-[2px] uppercase">
            Pontos acumulados
          </span>
        </div>
        <div>
          <p className="font-display tracking-[3px] text-[20px] uppercase">
            Bruno Siqueira
          </p>
          <span className="text-gr font-body text-[10px] tracking-[2px]">
            Membro desde 2023 - Nível Ouro
          </span>
        </div>
      </aside>
    </section>
  );
};

export default Loyaltyprogram;
