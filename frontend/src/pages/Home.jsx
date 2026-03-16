import React from "react";
import Hero from "../components/Hero";
import UpcomingMovies from "../components/UpcomingMovies";
import ScheduleTheDay from "../components/ScheduleTheDay";
import Loyaltyprogram from "../components/Loyaltyprogram";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <UpcomingMovies />
      <ScheduleTheDay />
      <Loyaltyprogram />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
