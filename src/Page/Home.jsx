import React from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import FeaturedCollections from "../Components/Home/FeaturedCollections";

const Home = () => {
  return (
    <div>
      <Banner />

      <FeaturedCollections />
      <About></About>
    </div>
  );
};

export default Home;
