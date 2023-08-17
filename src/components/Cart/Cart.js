import React from "react";
import "./Cart.scss";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
function Cart({ setCart }) {
  return (
    <div className="cart">
      <div className="closeBtn" onClick={() => setCart(false)}>
        <MdOutlineClose className="icon" />
      </div>
      <div className="cart-container">
        <div className="heading">My Bag</div>
        <hr />
        <div className="container">
          <div className="item">
            <div className="left">
              <img
                src="https://gatsby-ecommerce-theme.netlify.app/products/pdp1.jpeg"
                alt=""
              />
            </div>
            <div className="middle">
              <span className="title">Lambswool Crew Neck Jumper</span>
              <span className="price">₹ 500.00</span>
              <span className="size"> Size: XS</span>
              <div className="quntity">1 × 500</div>
            </div>
            <div className="right">
              <span>
                <MdOutlineClose />
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="checkout-container">
          <div className="amount">
            <span>Total(INR)</span>
            <span>₹ 500.00</span>
          </div>
          <p>Taxes and shipping will be calculated at checkout</p>
          <button>Checkout</button>
          <div className="return">
            <Link
              className="link"
              to={"/products"}
              onClick={() => setCart(false)}
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
