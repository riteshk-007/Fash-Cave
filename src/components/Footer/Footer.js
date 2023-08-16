import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <span>Info</span>
          <Link to="/" className="link style">
            About Us
          </Link>
          <Link to="/" className="link style">
            Journal
          </Link>
          <Link to="/" className="link style">
            Privacy Policy
          </Link>
        </div>
        <div className="center">
          <span>Support</span>
          <Link to="/" className="link style">
            FAQ
          </Link>
          <Link to="/" className="link style">
            Contact Us
          </Link>
          <Link to="/" className="link style">
            Shipping & Returns
          </Link>
        </div>
        <div className="right">
          <span>Newsletter</span>
          <p>
            Get 15% off your first purchase! Plus, be the first to know about
            sales, new product launches and exclusive offers!
          </p>
          <div className="inputTag">
            <input type="text" />
            <AiOutlineArrowRight className="tag" />
          </div>
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
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="container">
          <span>2023 &#169;. made by Ritesh</span>
          <div className="img">
            <img
              src="https://gatsby-ecommerce-theme.netlify.app/visa.png"
              alt=""
            />
            <img
              src="https://gatsby-ecommerce-theme.netlify.app/master.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
