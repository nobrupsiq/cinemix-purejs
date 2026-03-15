import React from "react";

const ScheduleTheDayCard = () => {
  return (
    <div
      className="group relative cursor-pointer
                p-4 grid grid-cols-[auto_1fr_auto_auto] items-center gap-4
                bg-mid rounded-sm2 text-white border border-transparent
                transition-all duration-300
                  
                before:content-['']
                before:absolute before:left-0 before:top-0 before:bottom-0
                before:w-1 before:bg-mu
                before:origin-bottom before:scale-y-0
                before:transition-transform before:duration-300
                  
                hover:before:scale-y-100
                hover:bg-light/10
                hover:border-mu/20"
    >
      <h3 className="font-display uppercase text-mu text-3xl">14:30</h3>
      <div className="ml-4">
        <h3 className="font-display uppercase text-white text-3xl">
          The marvels
        </h3>
        <span className="font-body uppercase text-gr text-[12px]">
          Dublado - 2D - 2h 12min
        </span>
      </div>
      <div className="grid grid-cols-[auto_auto] items-center gap-18 justify-self-end">
        <span className="uppercase font-body tracking-[2px] text-[12px] text-mu border pt-1 pb-1 pl-4 pr-4 rounded-sm2">
          Sala 3 . IMAX
        </span>
        <button className="cursor-pointer uppercase font-body text-[12px] tracking-[2px] border rounded-sm2 py-2 px-10 transition-all duration-300 group-hover:bg-mu group-hover:text-black group-hover:border-mu">
          Reservar
        </button>
      </div>
    </div>
  );
};

export default ScheduleTheDayCard;
