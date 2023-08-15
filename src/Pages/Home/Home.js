import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import HeroModel from "../../components/HeroModel/HeroModel";
import About from "../../components/About/About";
import HeroModel2 from "../../components/HeroModel2/HeroModel2";
function Home() {
  return (
    <div className="home">
      <Banner />
      <Categories />
      <NewArrivals />
      <HeroModel />
      <About />
      <HeroModel2 />
    </div>
  );
}

export default Home;
