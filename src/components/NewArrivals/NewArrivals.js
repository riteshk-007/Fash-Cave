import React from "react";
import "./NewArrivals.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { v4 as uuidv4 } from "uuid";

function NewArrivals() {
  const product = [
    {
      id: 10,
      img: "https://res.cloudinary.com/dkbrxxyxn/image/upload/v1692781908/89cd3dc2_185f_45a6_8b19_29b81641_6304a0311d.jpg",
    },
    {
      id: 11,
      img: "https://res.cloudinary.com/dkbrxxyxn/image/upload/v1692781992/a31023a4_c886_4ae8_84cf_e8aa9a5b_4c33d90375.jpg",
    },
    {
      id: 12,
      img: "https://res.cloudinary.com/dkbrxxyxn/image/upload/v1692782080/5b4fc687_b93b_4141_aeb6_1bd82db7_8e73b03391.jpg",
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
