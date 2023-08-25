import React from "react";
import "./Mobile.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
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
      <div className="icons">
        <a
          href="https://twitter.com/Riteshk_007"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://www.instagram.com/riteshk_007/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.facebook.com/people/Ritesh-Kumar/pfbid0Mvdua4aD7orDFNvSvMv6Lc5pLASmFS1FJN5tf5qNno9eMwHCzt7uvABoSGhtKsGLl/?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://github.com/riteshk-007"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ritesh-kumar-8064b626b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <span>Create by : Ritesh</span>
    </div>
  );
}

export default Mobile;
