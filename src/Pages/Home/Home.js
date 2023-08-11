import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
function Home() {
  return (
    <div className="home">
      <Banner />
      <Categories />
    </div>
  );
}

export default Home;
