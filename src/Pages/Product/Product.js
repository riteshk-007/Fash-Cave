import React, { useEffect, useState } from "react";
import "./Product.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
function Product() {
  const [qunatity, setQunatity] = useState(1);
  const [heart, setHeart] = useState(false);

  const handleClick = () => {
    setQunatity(1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="product">
      <div className="left">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          style={{
            "--swiper-pagination-color": "#000",
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "30px",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slides">
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="slides">
            <img
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="slides">
            <img
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="right">
        <div className="item">
          <div className="title">Lambswool Crew Neck Jumper</div>
          <div className="price">₹ 500.00</div>
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
          <p className="class">QUNATITY</p>
          <div className="qunatity">
            <span
              onClick={() => setQunatity(qunatity === 1 ? 1 : qunatity - 1)}
            >
              <AiOutlineMinus />
            </span>
            <div className="qun">{qunatity}</div>
            <span onClick={() => setQunatity(qunatity + 1)}>
              <AiOutlinePlus />
            </span>
          </div>
          <div className="btn-section">
            <button onClick={handleClick}>ADD TO BAG</button>
            <span onClick={() => setHeart(!heart)}>
              {!heart ? <AiOutlineHeart /> : <AiFillHeart className="heart" />}
            </span>
          </div>
          <div className="description">
            <p>
              This soft lambswool jumper is knitted in Scotland, using yarn from
              one of the world's oldest spinners based in Fife. Once knitted,
              the garment is washed in Scottish spring water to make it
              beautifully soft.
            </p>
          </div>
          <hr />
        </div>
      </div>
      <div className="bottom">
        <div className="content-container">
          <h1>Sustainability</h1>
          <p>
            We design our products to look good and to be used on a daily basis.
            And our aim is to inspire people to live with few timeless objects
            made to last. This is why quality over quantity is a cornerstone of
            our ethos and we have no interest in trends or seasonal collections.
          </p>
          <button>LEARN MORE</button>
        </div>
        <img
          src="https://gatsby-ecommerce-theme.netlify.app/cloth.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Product;
