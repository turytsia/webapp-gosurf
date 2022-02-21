import React from "react";
//images
import slide from "./i/slide.png";
import hammock from "./i/hammock.png";
//components
import Subtitle from "../UI/Subtitle";

export default function SleepSlide(props) {
  const hammockStyles = { position: "absolute", right: 0, bottom: 0 };
  return (
    <div className="section-slider__item">
      <div className="section-slider__item-img">
        <img src={slide} alt="slide" />
      </div>
      <img
        style={hammockStyles}
        src={hammock}
        alt="plane"
      />
      <Subtitle
        title="Resorts"
        top={0}
        right="83px"
        text={props.data.beach}
        subtext={props.data.location}
      />
      <Subtitle
        title="rating"
        bottom="0"
        left="139px"
        align="right"
        text={props.data.beach}
        subtext={props.data.location}
      />
    </div>
  );
}
