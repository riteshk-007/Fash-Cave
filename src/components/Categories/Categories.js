import React, { useContext } from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ContextApp } from "../../utils/Context";
import ReactLoading from "react-loading";

function Categories() {
  const { category, loading } = useContext(ContextApp);

  if (loading === false) {
    return (
      <div className="loading">
        <ReactLoading
          type="bubbles"
          color="#000"
          height={"150px"}
          width={"150px"}
        />
      </div>
    );
  }
  return (
    <div className="categories">
      <div className="container">
        <h3>New Collection</h3>
        <div className="wrapper">
          {category?.map((item) => {
            return (
              <Link
                className="card"
                key={uuidv4()}
                to={`/products/${item?.id}`}
              >
                <img
                  src={item?.attributes?.image?.data?.attributes?.url}
                  alt={item?.attributes?.name}
                />

                <div className="cate">
                  <h3>{item?.attributes?.name}</h3>
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
