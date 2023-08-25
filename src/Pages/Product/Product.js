// Import necessary modules and components
import React, { useContext, useEffect, useState } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { fetchDataFromApi } from "../../utils/api";
import { ContextApp } from "../../utils/Context";

// ToastContainer configuration for notifications
<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>;

// Product component
function Product() {
  const [quantity, setQuantity] = useState(1);
  const [heart, setHeart] = useState(false);
  const [product, setProduct] = useState(null);
  const { loading, setLoading } = useContext(ContextApp);
  const [image, setImage] = useState(null);

  const { id } = useParams();

  // Function to handle the "Add to Cart" button click
  const handleClick = () => {
    setQuantity(1);
    toast.success("Added To Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // Fetch product data based on the ID parameter
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductData();
  }, [id]);

  const fetchProductData = async () => {
    setLoading(false);
    try {
      const { data } = await fetchDataFromApi(
        `/api/products?populate=*&[filters][id]=${id}`
      );
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(true);
    }
  };

  // Render loading bubbles if data is loading
  if (!loading) {
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

  // Render the product details
  return (
    <div className="product">
      <ToastContainer />
      <div className="left">
        {/* Image gallery */}
        <div className="img-card">
          {product?.[0]?.attributes?.image?.data.map((item) => (
            <img
              src={item.attributes.url}
              alt=""
              key={item.id}
              onClick={(e) => {
                setImage(e.target.src);
              }}
            />
          ))}
        </div>
        {/* Selected image */}
        <div className="slides">
          <img
            src={
              image === null
                ? product?.[0]?.attributes?.thumbnail?.data?.attributes?.url
                : image
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="item">
          {/* Product details */}
          <div className="title">{product?.[0]?.attributes?.name}</div>
          <div className="subtitle">{product?.[0]?.attributes?.subtitle}</div>
          <div className="price">₹ {product?.[0]?.attributes?.price}.00</div>
          {/* Size options */}
          <div className="size">
            <p>Size</p>
            <div className="input-tag">
              <input type="radio" id="xs" name="fav_language" value="xs" />
              <label htmlFor="xs">XS</label>
              <input type="radio" id="s" name="fav_language" value="s" />
              <label htmlFor="s">S</label>
              <input type="radio" id="m" name="fav_language" value="m" />
              <label htmlFor="m">M</label>
              <input type="radio" id="l" name="fav_language" value="l" />
              <label htmlFor="l">L</label>
              <input type="radio" id="xl" name="fav_language" value="xl" />
              <label htmlFor="xl">XL</label>
            </div>
          </div>
          {/* Quantity selection */}
          <p className="class">QUANTITY</p>
          <div className="qunatity">
            <span
              onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
            >
              <AiOutlineMinus />
            </span>
            <div className="qun">{quantity}</div>
            <span onClick={() => setQuantity(quantity + 1)}>
              <AiOutlinePlus />
            </span>
          </div>
          {/* Add to Bag button and Heart icon */}
          <div className="btn-section">
            <button onClick={handleClick}>ADD TO BAG</button>
            <span onClick={() => setHeart(!heart)}>
              {!heart ? <AiOutlineHeart /> : <AiFillHeart className="heart" />}
            </span>
          </div>
          {/* Product description */}
          <div className="description">
            <p>{product?.[0]?.attributes?.description}</p>
          </div>
          {/* Divider */}
          <hr />
        </div>
      </div>

      {/* Bottom section */}
      <div className="bottom">
        <div className="content-container">
          {/* Sustainability content */}
          <h1>Sustainability</h1>
          <p>
            We design our products to look good and to be used on a daily basis.
            And our aim is to inspire people to live with few timeless objects
            made to last. This is why quality over quantity is a cornerstone of
            our ethos and we have no interest in trends or seasonal collections.
          </p>
          <button>LEARN MORE</button>
        </div>
        {/* Image */}
        <img
          src="https://gatsby-ecommerce-theme.netlify.app/cloth.png"
          alt=""
        />
      </div>
    </div>
  );
}

// Export the component
export default Product;
