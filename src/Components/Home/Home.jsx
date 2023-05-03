import React from "react";
import HomeBanner from "./HomeBanner";
import Chefs from "./ChefSection/Chefs";
import RecepeCategory from "./ChefSection/Recipies/RecepeCategory";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <div className="container mx-auto">
        <RecepeCategory />
        <Chefs></Chefs>
      </div>
    </div>
  );
};

export default Home;
