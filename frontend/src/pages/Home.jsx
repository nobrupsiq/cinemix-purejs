import React from "react";
import Hero from "../components/Hero";
import UpcomingMovies from "../components/UpcomingMovies";
import ScheduleTheDay from "../components/ScheduleTheDay";
import Loyaltyprogram from "../components/Loyaltyprogram";

const Home = () => {
  return (
    <div>
      <Hero />
      <UpcomingMovies />
      <ScheduleTheDay />
      <Loyaltyprogram />
    </div>
  );
};

export default Home;
