import React, { useMemo } from "react";
import "./Cart.scss";
import { MdOutlineClose } from "react-icons/md";
import { BsFillCartXFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/CartSlice";

function Cart({ setCart }) {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const subTotal = useMemo(() => {
    return cartItem.reduce(
      (total, val) => total + val.attributes.price * val.quantity,
      0
    );
  }, [cartItem]);
  return (
    <div className="cart">
      <div className="closeBtn" onClick={() => setCart(false)}>
        <MdOutlineClose className="icon" />
      </div>
      <div className="cart-container">
        <div className="heading">My Bag</div>
        <hr />
        {cartItem.length > 0 && (
          <div className="container">
            {cartItem.map((item) => {
              return (
                <div className="item" key={item?.id}>
                  <div className="left">
                    <img
                      src={item?.attributes?.thumbnail?.data?.attributes?.url}
                      alt=""
                    />
                  </div>
                  <div className="middle">
                    <span className="title">{item?.attributes?.name}</span>
                    <span className="price">
                      ₹ {item?.quantity * item?.attributes?.price}.00
                    </span>
                    <span className="size"> Size: XS</span>
                    <div className="quntity">
                      {item?.quantity} × ₹{item?.attributes?.price}
                    </div>
                  </div>
                  <div className="right">
                    <span
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <MdOutlineClose />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <hr />
        {cartItem.length > 0 && (
          <div className="checkout-container">
            <div className="amount">
              <span>Total(INR)</span>
              <span>₹ {subTotal}.00</span>
            </div>
            <p>Taxes and shipping will be calculated at checkout</p>
            <button
              onClick={() => {
                navigate("/payment");
                setCart(false);
              }}
            >
              Checkout
            </button>
            <div className="return">
              <Link className="link" to={"/"} onClick={() => setCart(false)}>
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
        )}

        {cartItem.length < 1 && (
          <div className="cart-empty">
            <span>
              <BsFillCartXFill />
            </span>
            <h3>You don't have any items in your cart</h3>
            <p>Your favourite items are just a click away</p>
            <Link to={"/"} className="btn" onClick={() => setCart(false)}>
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
