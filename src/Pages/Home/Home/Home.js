import React from "react";
import About from "../About/About";
import Bannner from "../Bannner/Bannner";
import DesigneBanner from "../DesigneBanner/DesigneBanner";
import Products from "../Products/Products/Products";

const Home = () => {
  return (
    <div>
      <Bannner></Bannner>
       <Products></Products>
      <DesigneBanner></DesigneBanner>
      <About></About>
    </div>
  );
};

export default Home;
 