import React, { useEffect } from "react";
import "./Products.scss";

import { IoIosOptions } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 101,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt1.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
    {
      id: 102,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt2.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
    {
      id: 103,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt3.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
    {
      id: 104,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt1.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
    {
      id: 105,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt2.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
    {
      id: 106,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt3.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
  ];
  return (
    <div className="products">
      <div className="filter">
        <span>
          <IoIosOptions /> Filter
        </span>
        <span>
          Sort by <BiChevronDown />
        </span>
      </div>
      <div className="container">
        {data?.map((item) => {
          return (
            <Link
              to={`/product/${item.id}`}
              className="slide link"
              key={item.id}
            >
              <div className="card">
                <img src={item.img} alt="" />
                <span>
                  <h5>{item.title}</h5>
                  <p>₹ {item.price}</p>
                </span>
                <div>
                  <FaRegHeart className="heart" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
