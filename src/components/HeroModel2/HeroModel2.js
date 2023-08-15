import React from "react";
import "./HeroModel2.scss";
import { Link } from "react-router-dom";
function HeroModel2() {
  return (
    <div className="heroModel2">
      <h1>We are Sustainable</h1>
      <p>
        From caring for our land to supporting our people, discover the steps
        we’re taking to do <br></br> more for the world around us.
      </p>
      <Link to={"/products"}>
        <button>SHOP NOW</button>
      </Link>
    </div>
  );
}

export default HeroModel2;
