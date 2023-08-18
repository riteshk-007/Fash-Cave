import React, { useEffect } from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import HeroModel from "../../components/HeroModel/HeroModel";
import About from "../../components/About/About";
import HeroModel2 from "../../components/HeroModel2/HeroModel2";
import Attribute from "../../components/Attribute/Attribute";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="home">
      <Banner />
      <Categories />
      <NewArrivals />
      <HeroModel />
      <About />
      <HeroModel2 />
      <Attribute />
    </div>
  );
}

export default Home;
