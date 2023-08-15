import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import HeroModel from "../../components/HeroModel/HeroModel";
function Home() {
  return (
    <div className="home">
      <Banner />
      <Categories />
      <NewArrivals />
      <HeroModel />
    </div>
  );
}

export default Home;
