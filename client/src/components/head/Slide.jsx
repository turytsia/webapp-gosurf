import React from "react";

//images
import link from "../slick/i/arrow-right.svg";

export default function Slide(props) {
  return (
    <div className="head-slider__element">
      <div
        className="head-slider__element-img"
        style={{ backgroundImage: `url(${props.slideData.slide})` }}
      >
        <div className="head-slider__element-content">
          <span className="head-slider__element-subtext">SURF</span>
          <h2 className="head-slider__element-title">
            {props.slideData.surfPlace}
          </h2>
          <span className="head-slider__element-subtext">CONDITION</span>
          <h3 className="head-slider__element-text">
            {props.slideData.condition}
          </h3>
          <img src={link} alt="link" />
        </div>
      </div>
    </div>
  );
}
