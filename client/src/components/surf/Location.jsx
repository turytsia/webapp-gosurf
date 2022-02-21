import React from 'react';
//components
import LocationContent from './LocationContent';
export default function Location(props) {

  return <button onClick={props.onClick} className="surf-map__button">
      {props.isActive&&<LocationContent data = {props.data}/>}
  </button>;
}
