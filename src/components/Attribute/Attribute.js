import React from "react";
import "./Attribute.scss";
import { BsBoxSeam } from "react-icons/bs";
import { RiLoopRightLine } from "react-icons/ri";
import { TiCreditCard } from "react-icons/ti";
function Attribute() {
  return (
    <div className="attribute">
      <span>
        <BsBoxSeam className="icon" />
        <h3>Free Delivery Worldwide</h3>
        <p>Click to learn more</p>
      </span>
      <span>
        <RiLoopRightLine className="icon" />
        <h3>Returns</h3>
        <p>Return goods in 30 days</p>
      </span>
      <span>
        <TiCreditCard className="icon" />
        <h3>Secured Payment</h3>
        <p>Shop safely</p>
      </span>
    </div>
  );
}

export default Attribute;
