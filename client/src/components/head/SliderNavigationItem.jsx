import React from "react";

export default function SliderNavigationItem(props) {
  const number = '0'+(props.number+1);
  return (
    <div
      onClick={() => props.onNavigationClickHandler(props.number)}
      className='head-slider__option'
    >
      <div className={`head-slider__option-content ${props.number===props.currentSlide&&'head-slider__option-content--active'}`}>
        <span className="head-slider__option-content__number">
          {number}
        </span>
        <span className="head-slider__option-content__place">
          {props.surfPlace}
        </span>
      </div>
    </div>
  );
}
