import React from "react";

export default function TravelInfo() {

  return (
    <div className="info">
      <div className="info__item">
        <span className="info__item-title">Destination</span>
        <span className="info__item-subtitle">Queensland Australia</span>
      </div>
      <div className="info__item">
        <span className="info__item-title">Distance</span>
        <span className="info__item-subtitle">7,065 Miles</span>
      </div>
      <div className="info__item">
        <span className="info__item-title">Travel Time</span>
        <span className="info__item-subtitle">23 Hours 5 Minutes</span>
      </div>
      <div className="info__item">
        <span className="info__item-title">Pricing</span>
        <span className="info__item-subtitle">$1,976 USD</span>
      </div>
    </div>
  );
}
