import React from "react";
import Hero from "../components/Hero";
import UpcomingMovies from "../components/UpcomingMovies";
import ScheduleTheDay from "../components/ScheduleTheDay";

const Home = () => {
  return (
    <div>
      <Hero />
      <UpcomingMovies />
      <ScheduleTheDay />
    </div>
  );
};

export default Home;
