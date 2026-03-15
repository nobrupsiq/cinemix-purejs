import React from "react";

// ${featured ? "flex-2 hover:flex-5" : "flex-1 hover:flex-5"} Deixar o primeiro card expandido

const UpcomingCard = () => {
  return (
    <div
      className={`flex flex-col h-140 rounded-sm2 p-page flex-2 hover:flex-5 transition-fast duration-400 justify-end overflow-hidden
      `}
      style={{
        background: `
      radial-gradient(circle at top, rgba(160,70,255,0.35), rgba(30,5,60,0.8) 60%, rgba(10,0,25,1)),
      linear-gradient(180deg, rgba(68,17,112,0.35), rgba(30,5,60,0.85) 60%, rgba(10,0,25,1))
    `,
      }}
    >
      <p className="text-mu text-[10px] uppercase font-body tracking-[2px]">
        Ação . Ficção científica
      </p>
      <h2 className="text-white font-display tracking-[2px] text-[44px]">
        The marvels
      </h2>
    </div>
  );
};

export default UpcomingCard;
