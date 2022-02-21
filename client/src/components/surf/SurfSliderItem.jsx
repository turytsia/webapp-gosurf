import React from "react";

//images
import surfSlide from "./i/surf-slide.png";
import Button, { ButtonConfig } from "../UI/Button";

export default function SurfSliderItem(props) {
  const SlideStyle = { backgroundImage: `url(${surfSlide})` };

  const ContentStyle = `surf-slider__item-content ${
    !props.isActive ? "surf-slider__item-content--black" : ""
  }`;

  const buttonStyle = {
    position: "absolute",
    bottom: "20px",
  };

  const button = new ButtonConfig("view", "surf", buttonStyle);

  return (
    <div className="surf-slider__item">
      <div className="surf-slider__item-wrapper" style={SlideStyle}>
        <div className={ContentStyle}>
          <h3 className="surf-slider__item-title">{props.data.beach}</h3>
          <span className="surf-slider__item-location">
            {props.data.location}
          </span>
          {props.isActive && <Button button={button} />}
        </div>
      </div>
    </div>
  );
}
