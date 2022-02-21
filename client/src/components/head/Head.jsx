import React from "react";
//images
import logo from "./i/logo.svg";
import surf from "./i/surf.svg";
import travel from "./i/travel.svg";
import sleep from "./i/camp.svg";
import shop from "./i/surfboard.svg";
import point from "./i/point.svg";
import arrowDown from './i/down-arrows.svg'

//components
import SliderHead from "./SliderHead";
import Calendar from "./Calendar";
import Map from "./Map";

//styles
import 'animate.css'

export default function Head() {
  return (
    <div className="head">
      <SliderHead />
      <span className="head-style__text">GO SURF</span>
      <Map />
      <img className="head__arrow-down" src={arrowDown} alt="down arrow" />
      <div className="head-menu">
        <img className="head-menu__logo" src={logo} alt="logo" />
        <div className="head-menu__options">
          <div className="head-menu__option">
            <img src={surf} alt="surf" />
            <span>Surf</span>
          </div>
          <div className="head-menu__option">
            <img src={travel} alt="travel" />
            <span>Travel</span>
          </div>
          <div className="head-menu__option">
            <img src={sleep} alt="sleep" />
            <span>Sleep</span>
          </div>
          <div className="head-menu__option">
            <img src={shop} alt="shop" />
            <span>Shop</span>
          </div>
        </div>
        <Calendar />
        <div className="head-menu__address">
          <img src={point} alt="address" />
          <span>California</span>
        </div>
      </div>
    </div>
  );
}
