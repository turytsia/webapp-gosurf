import React from "react";
//images
import slide from "./i/slide.png";
import plane from "./i/plane.png";
//components
import Subtitle from "../UI/Subtitle";

export default function TravelSlide(props) {
  const planeStyles = { position: "absolute", right: 0, bottom: 0 };
  return (
    <div className="section-slider__item">
      <div className="section-slider__item-img">
        <img src={slide} alt="slide" />
      </div>
      <img
        style={planeStyles}
        src={plane}
        alt="plane"
      />
      <Subtitle
        title="shore"
        top="0"
        right={"83px"}
        text={props.data.beach}
        subtext={props.data.location}
      />
      <Subtitle
        title="airline"
        bottom="0"
        left="139px"
        align="right"
        text={props.data.beach}
        subtext={props.data.location}
      />
    </div>
  );
}
