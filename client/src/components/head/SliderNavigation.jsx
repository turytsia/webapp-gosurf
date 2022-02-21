import React from "react";
import SliderNavigationItem from "./SliderNavigationItem";
export default function SliderNavigation(props) {
  const sliderNavigationList = props.sliderData.map((slide, index) => (
    <SliderNavigationItem
      key={index}
      number={index}
      surfPlace={slide.surfPlace}
      onNavigationClickHandler={props.OnNavigationClickHandler}
      currentSlide = {props.currentSlide}
    />
  ));

  return <div className="head-slider__options">{sliderNavigationList}</div>;
}
