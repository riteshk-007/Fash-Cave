import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
function Home() {
  return (
    <div className="home">
      <Banner />
      <Categories />
      <NewArrivals />
    </div>
  );
}

export default Home;
