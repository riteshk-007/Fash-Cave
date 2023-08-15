import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
function Categories() {
  const data = [
    {
      id: 1,
      img: "https://gatsby-ecommerce-theme.netlify.app/collections/collection1.png",
      category: "Men",
    },
    {
      id: 2,
      img: "https://gatsby-ecommerce-theme.netlify.app/collections/collection2.png",
      category: "Women",
    },
    {
      id: 3,
      img: "https://gatsby-ecommerce-theme.netlify.app/collections/collection3.png",
      category: "Accessories",
    },
    {
      id: 4,
      img: "https://gatsby-ecommerce-theme.netlify.app/collections/collection4.png",
      category: "Simple Cotton",
    },
  ];
  return (
    <div className="categories">
      <div className="container">
        <h3>New Collection</h3>
        <div className="wrapper">
          {data?.map((item) => {
            return (
              <Link
                className="card"
                key={uuidv4()}
                to={`/products/${item.category}`}
              >
                <img src={item.img} alt={item.category} />

                <div className="cate">
                  <h3>{item.category}</h3>
                  <button>SHOP NOW</button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
