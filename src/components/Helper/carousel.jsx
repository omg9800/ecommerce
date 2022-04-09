import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import c1 from "../../images/c1.jpg";
import c2 from "../../images/c2.jpg";
import c3 from "../../images/c3.jpg";
import "./helper.css";
export default () => {
  return (
    <Carousel
      showStatus={false}
      showDots={true}
      showArrows={false}
      autoPlay={true}
      autoPlaySpeed={300}
      infinite={true}
      focusOnSelect={true}
      // transitionDuration={1000}
      showThumbs={false}
    >
      <div className="carousel-img">
        <img src={c1} />
      </div>
      <div className="carousel-img">
        <img src={c2} />
      </div>
      <div className="carousel-img">
        <img src={c3} />
      </div>
    </Carousel>
  );
};
