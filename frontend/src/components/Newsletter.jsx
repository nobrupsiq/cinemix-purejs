import React from "react";

const Newsletter = () => {
  return (
    <section className="p-page mt-20 bg-deep rounded-sm2 border-t border-b border-mu/20">
      <div className="container mx-auto flex items-center justify-between mt-8">
        <div className="">
          <h2 className="text-6xl font-display mb-4 text-white">
            Fique por <br />
            <span className="text-mu">dentro</span>
          </h2>
          <p className="text-gr w-full mb-8 font-body text-sm">
            Receba estreias, promoções e novidades direto no seu e-mail.
          </p>
        </div>
        <form action="" className="flex w-full max-w-lg">
          <input
            type="email"
            placeholder="Seu@email.com"
            className="border border-mu/20 rounded-sm2 px-4 py-4 flex-1 bg-deepb text-white focus:outline-none focus:border-mu/50 rounded-tr-none rounded-br-none transition-all duration-300"
          />
          <button
            type="submit"
            className="btn-primary rounded-tl-none rounded-bl-none text-[12px]"
          >
            <span>Inscrever</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
