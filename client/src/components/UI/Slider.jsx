import React from "react";
import { default as Slick } from "react-slick";
//compoenents
import ArrowNext from "../slick/ArrowNext";
import ArrowPrev from "../slick/ArrowPrev";

export default function Slider(props) {
  const Item = props.item;

  function changeSlideHandler(slide) {
    props.setCurrentSlide(slide);
  }

  const settings = {
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    afterChange: changeSlideHandler,
  };

  const SliderList = props.data.map((slide, i) => (
    <Item key={i} data = {slide} />
  ));

  return (
    <Slick className="section-slider" {...settings}>
      {SliderList}
    </Slick>
  );
}
