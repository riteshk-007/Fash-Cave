import React from "react";
import "./Mobile.scss";
import { Link } from "react-router-dom";
function Mobile({ setShowMenu }) {
  return (
    <div className="mobile">
      <Link className="link li" to={"/"} onClick={() => setShowMenu(false)}>
        Shop
      </Link>
      <Link className="link li" to={"/"} onClick={() => setShowMenu(false)}>
        Journal
      </Link>
      <Link className="link li" to={"/"} onClick={() => setShowMenu(false)}>
        About
      </Link>
      <hr />
      <span>Create by : Ritesh</span>
    </div>
  );
}

export default Mobile;
