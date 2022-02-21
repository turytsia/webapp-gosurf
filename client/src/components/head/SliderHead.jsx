import React, { useRef, useState } from "react";
import Slider from "react-slick";

//components
import Slide from "./Slide";
import ArrowNext from "../slick/ArrowNext";
import ArrowPrev from "../slick/ArrowPrev";
import SliderNavigation from "./SliderNavigation";

//data
import sliderData from "./sliderData.js";

export default function SliderHead() {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    afterChange: onSlideChangeHandler,
    fade:true
  };

  const SliderList = sliderData.map((slideData, index) => (
    <Slide key={index} slideData={slideData} />
  ));

  function onSlideChangeHandler(slide) {
    setCurrentSlide(slide);
  }

  function navigationClickHandler(id) {
    sliderRef.current.slickGoTo(id);
  }

  return (
    <>
      <Slider {...sliderSettings} ref={sliderRef}>
        {SliderList}
      </Slider>
      <SliderNavigation
        sliderData={sliderData}
        OnNavigationClickHandler={navigationClickHandler}
        currentSlide={currentSlide}
      />
    </>
  );
}
