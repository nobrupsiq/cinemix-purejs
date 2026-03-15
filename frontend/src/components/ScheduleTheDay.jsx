import React from "react";
import ScheduleTheDayCard from "./ScheduleTheDayCard";

const ScheduleTheDay = () => {
  return (
    <section className="p-page pb-18 mx-auto mt-24 bg-deep border-t border-b border-mu/20 pt-16 rounded-sm2">
      <div className="container mx-auto flex items-center gap-x-6">
        <div className="">
          <span className="text-mu uppercase tracking-[2px] font-body text-sm">
            Hoje
          </span>
          <h2 className="uppercase text-white font-display text-6xl tracking-[2px]">
            Programação do dia
          </h2>
        </div>
        <div className="h-px w-4xl bg-linear-to-r from-mu to-transparent blur-[0.3px]" />
      </div>
      <div className="mt-12 grid gap-2 container mx-auto">
        <ScheduleTheDayCard />
        <ScheduleTheDayCard />
        <ScheduleTheDayCard />
        <ScheduleTheDayCard />
        <ScheduleTheDayCard />
      </div>
    </section>
  );
};

export default ScheduleTheDay;
