import React from "react";

const UpcomingMovies = () => {
  return (
    <section className="container mx-auto p-page">
      <div className="flex justify-between items-center gap-6">
        <div>
          <p className="text-mu uppercase tracking-[2px] font-body text-sm">
            Novidades
          </p>
          <h1 className="text-6xl text-white font-display tracking-[2px]">
            Em breve nos cinemas
          </h1>
        </div>
        <div className="flex-1 h-px bg-linear-to-r from-mu to-transparent blue-[0.3px]" />
        <p>
          <a href="" className="text-mu uppercase font-body tracking-[2px]">
            Ver todos
          </a>
        </p>
      </div>

      <div>{/* CARDS */}</div>
    </section>
  );
};

export default UpcomingMovies;
