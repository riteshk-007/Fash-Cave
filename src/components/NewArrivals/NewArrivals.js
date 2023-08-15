import React from "react";
import "./NewArrivals.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { FaRegHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function NewArrivals() {
  const product = [
    {
      id: 10,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt1.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
    {
      id: 11,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt2.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
    {
      id: 12,
      img: "https://gatsby-ecommerce-theme.netlify.app/products/shirt3.jpg",
      title: "Classic T-Shirt",
      price: 699,
    },
  ];
  return (
    <div className="NewArrivals">
      <div className="head">
        <h2>New Arrivals</h2>
        <Link to={"/products"} className="link view">
          VIEW ALL
        </Link>
      </div>
      <div className="slider">
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {product?.map((item) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <Link to={`/product/${item.id}`} className="slide link">
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default NewArrivals;
