import React, { useState } from "react";
//images
import map from "./i/map.svg";
import pos from './i/pos-logo.svg'
//components
import Title from "../UI/Title";
import Location from "./Location";
import SurfSlider from "./SurfSlider";
//data
import mapData from "../data";

export default function Surf() {
  const [currentlyActiveItem, setCurrentlyActiveItem] = useState(0);

  const locationsList = mapData.map((location, i) => (
    <Location
      key={i}
      data={location}
      isActive={currentlyActiveItem === i}
      onClick={setActiveSlideHandler.bind(null, i)}
    />
  ));

  function setActiveSlideHandler(buttonIndex) {
    setCurrentlyActiveItem(buttonIndex);
  }

  function setCurrentSlide(fn) {
    fn();
  }

  return (
    <div className="surf">
      <Title text="SURF" />
      <div className="surf-slider__navigation">
        <div className="surf-map">
          <img src={map} alt="map" />
          {locationsList}
        </div>
        <img className="surf-slider__navigation-logo" src={pos} alt="pos" />
      </div>
      <SurfSlider
        className="surf-slider"
        onCurrentSlide={setCurrentSlide}
        activeItem={currentlyActiveItem}
        setActiveSlide={setActiveSlideHandler}
      />
    </div>
  );
}
