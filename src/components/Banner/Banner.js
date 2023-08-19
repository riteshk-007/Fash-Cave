import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="banner">
      <img
        src="https://gatsby-ecommerce-theme.netlify.app/banner1.png"
        alt=""
      />
      <div className="banner-info">
        <h1>
          Essentials for <br></br> a cold winter
        </h1>
        <p>Discover Autumn Winter 2021</p>
        <Link to={"/"}>
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
