import React, { useState } from "react";
//images
import slide from "./i/slide.png";
import wax from "./i/wax.png";
import surfboard from "./i/surfboard.png";
import stars from "./i/stars.png";
import bracelet from "./i/bracelet.png";
import plus from "./i/plus.svg";
import minus from "./i/minus.svg";
//components
import Subtitle from "../UI/Subtitle";
import Button, { ButtonConfig } from "../UI/Button";

const descriptionButtons = [
  {
    position: { top: "295px", left: "0" },
  },
  {
    position: { top: "610px", right: "155px" },
  },
  {
    position: { top: "202px", right: "36px" },
  },
];

const button = new ButtonConfig("drop", "in");

export default function ShopSlide(props) {
  const [activeDesription, setActiveDesription] = useState(0);

  function activeDescriptionHandler(description) {
    console.log(description);
    setActiveDesription(description);
  }

  // function getDescriptionClass(description){
  //   const descriptionClass = 'shop-item__description-content'
  //   return `${descriptionClass} ${descriptionClass+description===activeDesription?'--active':''}`;
  // }

  const descriptionButtonList = descriptionButtons.map((btn, i) => (
    <div
      key={i}
      onClick={activeDescriptionHandler.bind(null, i)}
      style={btn.position}
      className="shop-item__description"
    >
      <img src={activeDesription === i ? minus : plus} alt="dot" />
      <div
        className={`shop-item__description-content ${
          i === activeDesription ? "shop-item__description--active" : ""
        }`}
      >
        Double Concave with Vee Shape low point
      </div>
    </div>
  ));

  return (
    <div className="shop-item">
      <div style={{ textAlign: "right" }} className="section-slider__item-img">
        <img src={slide} alt="slide" />
      </div>

      <div className="shop-item__content">
        <div className="shop-item__wrapper">
          <div className="shop-item__info">
            <div className="shop-item__title">
              <Subtitle
                title="Style"
                top="0"
                left="0"
                align="right"
                text={props.data.name}
              />
            </div>
            <div className="shop-item__rating">
              <img src={stars} alt="stars" />
            </div>
            <div className="shop-item__pricing">
              <span>$799</span>
            </div>
            <div className="shop-item__actions">
              <Button button={button} />
            </div>
          </div>
          <div className="shop-item__product">
            <img src={surfboard} alt="product" />
            {descriptionButtonList}
          </div>
          <div className="shop-item__extras">
            <div className="shop-item__extras-title">
              <span>extras</span>
            </div>
            <div className="shop-item__extras-content">
              <div className="shop-item__extras-product">
                <img src={wax} alt="extra-product" />
                <div className="shop-item__extras-product-name">Sex Wax</div>
                <div className="shop-item__extras-product-price">$24.99</div>
              </div>
              <div className="shop-item__extras-product">
                <img src={bracelet} alt="extra-product" />
                <div className="shop-item__extras-product-name">Pura vida</div>
                <div className="shop-item__extras-product-price">$39.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
