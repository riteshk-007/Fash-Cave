import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import Mobile from "../Mobile/Mobile";
import Cart from "../Cart/Cart";
import { BsSuitHeart, BsHandbag } from "react-icons/bs";
import { PiUserCircleThin } from "react-icons/pi";
import { BiMenu, BiSearch } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";

function Header() {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showmenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const navigate = useNavigate();

  const { cartItem } = useSelector((state) => state.cart);
  const searchQueryHandler = (event) => {
    if (
      (event.key === "Enter" || event === "searchButton") &&
      searchQuery.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setShow(false);
      setSearchQuery("");
    }
  };

  return (
    <div className="header">
      <span className="note">Free shipping worldwide</span>
      <div className="navbar">
        <div className="left">
          <span className="menu">
            <span onClick={() => setShowMenu(!showmenu)}>
              {showmenu ? (
                <CgClose className="menu-btn" />
              ) : (
                <BiMenu className="menu-btn" />
              )}
            </span>
          </span>

          <ul>
            <span className="link li">
              {/* Changed <Link> to <li> */}
              Shop
              <div className="categories ">
                <span>
                  <p>Women</p>
                  <Link to={`/products/${1}`} className="link">
                    <li>All Clothing</li>
                  </Link>
                  <Link to={`/products/${1}`} className="link">
                    <li>Sweatshirts & Hoodies</li>
                  </Link>
                  <Link to={`/products/${1}`} className="link">
                    <li>Jackets</li>
                  </Link>
                  <Link to={`/products/${1}`} className="link">
                    <li>Trousers</li>
                  </Link>
                </span>
                <span>
                  <p>Men</p>
                  <Link to={`/products/${1}`} className="link">
                    <li>All Clothing</li>
                  </Link>
                  <Link to={`/products/${1}`} className="link">
                    <li>Sweatshirts & Hoodies</li>
                  </Link>
                  <Link to={`/products/${1}`} className="link">
                    <li>Jackets</li>
                  </Link>
                  <Link to={`/products/${1}`} className="link">
                    <li>Trousers</li>
                  </Link>
                </span>
                <span>
                  <p>ACCESSORIES</p>
                  <Link to={`/products/${1}`} className="link">
                    <li>Caps & Scarves</li>
                  </Link>
                  <Link to={`/products/${1}`} className="link">
                    <li>Bags</li>
                  </Link>
                  <img
                    src="https://images.pexels.com/photos/17664823/pexels-photo-17664823/free-photo-of-fashion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </span>
              </div>
            </span>
            <span className="link li">Journal</span>
            <span className="link li">About</span>
          </ul>
        </div>
        <div className="middle">
          <Link className="link" to={"/"}>
            <h1
              onClick={() => {
                setShowMenu(false);
                setShow(false);
                setCart(false);
              }}
            >
              FashCave
            </h1>
          </Link>
        </div>
        <div className="right">
          <BiSearch
            className="icon"
            fontSize={21}
            onClick={() => setShow(!show)}
          />
          <BsSuitHeart className="icon icon-md" fontSize={20} />
          <PiUserCircleThin className="icon icon-md" fontSize={25} />
          <span
            className="cart-icon"
            style={{ cursor: "pointer" }}
            onClick={() => setCart(true)}
          >
            <BsHandbag className="icon" fontSize={18} />
            {cartItem.length > 0 && <span>{cartItem.length}</span>}
          </span>
          {show && (
            <div className="serach">
              <input
                type="text"
                placeholder="Search here.."
                value={searchQuery}
                onKeyUp={searchQueryHandler}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <AiOutlineArrowRight
                className="icon"
                onClick={() => searchQueryHandler("searchButton")}
              />
            </div>
          )}
        </div>
        {showmenu && <Mobile setShowMenu={setShowMenu} />}
        {cart && <Cart setCart={setCart} />}
      </div>
    </div>
  );
}

export default Header;
