import React, { useCallback, useEffect, useRef } from "react";
import Slider from "react-slick";
//components
import SurfSliderItem from "./SurfSliderItem";
import ArrowNext from "../slick/ArrowNext";
import ArrowPrev from "../slick/ArrowPrev";
//data
import data from "../data.js";
export default function SurfSlider(props) {
  const sliderRef = useRef();

  const SurfSliderItemList = data.map((slide, i) => (
    <SurfSliderItem
      key={i}
      data={slide}
      isActive={props.activeItem === i}
    />
  ));

  //sync with map
  function activeSlideHandler(id) {
    props.setActiveSlide(id);
  }

  const setActiveSlideInSlider = useCallback(() => {
    sliderRef.current.slickGoTo(props.activeItem);
  }, [props.activeItem]);

  const sliderSettings = {
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    touchMove:false,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    ref: sliderRef,
    afterChange: activeSlideHandler,
  };

  //moves slides to a current slide in Slider
  useEffect(() => {
    props.onCurrentSlide(setActiveSlideInSlider);
  }, [props, setActiveSlideInSlider]);

  return (
    <Slider  className={props.className} {...sliderSettings}>
      {SurfSliderItemList}
    </Slider>
  );
}
