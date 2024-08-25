import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSaller from "../components/BestSaller";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSaller />
    </div>
  );
};

export default Home;
