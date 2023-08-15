import React from "react";
import "./HeroModel.scss";
import { Link } from "react-router-dom";
function HeroModel() {
  return (
    <div className="heroModel">
      <h1 className="main-heading">
        -50% off<br></br> All Essentials
      </h1>
      <span>
        <Link className="link style" to={"/"}>
          WOMEN
        </Link>
        <Link className="link style" to={"/"}>
          MEN
        </Link>
      </span>
    </div>
  );
}

export default HeroModel;
