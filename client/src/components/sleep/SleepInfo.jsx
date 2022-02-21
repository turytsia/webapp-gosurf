import React, { useEffect, useState } from "react";
//images
import plus from "./i/plus.svg";
import minus from "./i/minus.png";

export default function TravelInfo(props) {
  const [guests, setGuests] = useState(4);
  const [nights, setNights] = useState(5);
  const [price, setPrice] = useState(guests*nights*20);

  function addNightHanler() {
    setNights((prevState) => prevState + 1);
  }
  function removeNightHanler() {
    setNights((prevState) => (prevState ? prevState - 1 : 0));
  }
  function addGuestHanler() {
    setGuests((prevState) => prevState + 1);
  }
  function removeGuestHanler() {
    setGuests((prevState) => (prevState ? prevState - 1 : 0));
  }

  useEffect(()=>{
    setPrice(guests*nights*20)
  },[nights,guests])

  return (
    <div className="info">
      <div className="info__item">
        <span className="info__item-title">Resort</span>
        <span className="info__item-subtitle">Queensland Australia</span>
      </div>
      <div className="info__item">
        <span className="info__item-title"># of nights</span>
        <span className="info__item-subtitle">
          {nights} Nights
          <div className="info__item-actions">
            <button onClick={removeNightHanler} className="info__item-btn">
              <img src={minus} alt="minus" />
            </button>
            <button onClick={addNightHanler} className="info__item-btn">
              <img src={plus} alt="plus" />
            </button>
          </div>
        </span>
      </div>
      <div className="info__item">
        <span className="info__item-title"># of guests</span>
        <span className="info__item-subtitle">
          {guests} Guests
          <div className="info__item-actions">
            <button onClick={removeGuestHanler} className="info__item-btn">
              <img src={minus} alt="minus" />
            </button>
            <button onClick={addGuestHanler} className="info__item-btn">
              <img src={plus} alt="plus" />
            </button>
          </div>
        </span>
      </div>
      <div className="info__item">
        <span className="info__item-title">Pricing</span>
        <span className="info__item-subtitle">
          ${price.toLocaleString()} USD
        </span>
      </div>
    </div>
  );
}
