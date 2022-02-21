import React from 'react';

import arrowRight from "../slick/i/arrow-right.svg";
import water from './i/water.png'
import wind from './i/wind.png'
import surf from './i/surf.svg'

export default function LocationContent(props) {
  return <div className="surf-map__button-content">
  <header className="surf-map__button-header">
    <h4 className="surf-map__button-header__location">{props.data.beach}</h4>
    <span className="surf-map__button-header__arrow">
      <img src={arrowRight} alt="arrow" />
    </span>
  </header>
  <div className="surf-map__button-location">
    <h4>{props.data.loaction}</h4>
  </div>
  <div className="surf-map__button-info">
    <div className="surf-map__button-info__item">
      <img src={surf} alt="surf" />
      <h4 className="surf-map__button-info__item-values">{props.data.info.wave}</h4>
      <h4 className="surf-map__button-info__item-name">Surf (FT)</h4>
    </div>
    <div className="surf-map__button-info__item">
      <img src={water} alt="water" />
      <h4 className="surf-map__button-info__item-values">{props.data.info.tide}</h4>
      <h4 className="surf-map__button-info__item-name">Tide (FT)</h4>
    </div>
    <div className="surf-map__button-info__item">
      <img src={wind} alt="wind" />
      <h4 className="surf-map__button-info__item-values">{props.data.info.wind}</h4>
      <h4 className="surf-map__button-info__item-name">Wind (KTS)</h4>
    </div>
  </div>
</div>;
}
