import React from "react";
import Button from "../Button";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1, 
    nextArrow: <NextArrow/>,  
    prevArrow: <span></span>,
  };
  return (
    <section className=" mb-16 py-11 bg-[#FCF8F3] explore">
      <div className="container flex gap-11 items-center">
        <div className=" w-1/3">
          <h2 className="title">50+ Beautiful rooms inspiration</h2>
          <p className="details pb-6">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button title="Explore" path="shop" />
        </div>
        <div className="  w-3/5"> 
          <Slider {...settings}>
          <div className="slide_items">
            <img src="/slide1.png" className="w-full h-full" alt="slide" />
          </div>  
          <div className="slide_items">
            <img src="/slide2.png" className="w-full h-full" alt="slide" />
          </div>
          <div className="slide_items">
            <img src="/slide3.png" className="w-full h-full" alt="slide" />
          </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;
