import React from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import FeaturedCollections from "../Components/Home/FeaturedCollections";
import CustomerReviews from "../Components/Home/CustomerReviews";

const Home = () => {
  return (
    <div>
      <Banner />

      <FeaturedCollections />
      <About></About>
      <CustomerReviews/>
    </div>
  );
};

export default Home;
