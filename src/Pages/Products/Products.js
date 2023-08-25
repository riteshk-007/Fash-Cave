// Import necessary modules and components
import React, { useContext, useEffect, useState } from "react";
import "./Products.scss";
import { IoIosOptions } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import ReactLoading from "react-loading";
import { ContextApp } from "../../utils/Context";
import { fetchDataFromApi } from "../../utils/api";

// Products component
function Products() {
  const { loading, setLoading } = useContext(ContextApp);
  const [product, setProducts] = useState(null);
  const id = useParams();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch products based on the category ID
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(false);
      try {
        const { data } = await fetchDataFromApi(
          `/api/products?populate=*&[filters][categories][id]=${id.category}`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(true);
      }
    };
    fetchCategories();
  }, [id.category]);

  // Render loading bubbles if data is loading
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

  // Render the products
  return (
    <div className="products">
      {/* Filter and sort options */}
      <div className="filter">
        <span>
          <IoIosOptions /> Filter
        </span>
        <span>
          Sort by <BiChevronDown />
        </span>
      </div>
      {/* Product container */}
      <div className="container">
        {loading &&
          product?.map((item) => (
            <Link
              to={`/product/${item?.id}`}
              className="slide link"
              key={item?.id}
            >
              <div className="card">
                <img
                  src={item?.attributes?.thumbnail?.data.attributes?.url}
                  alt={item?.attributes?.name}
                />
                <span>
                  <h5>{item?.attributes?.name}</h5>
                  <p>₹ {item?.attributes?.price}</p>
                </span>
                <div>
                  <FaRegHeart className="heart" />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

// Export the component
export default Products;
