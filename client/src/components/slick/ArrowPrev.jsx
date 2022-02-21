import React from "react";
import prevArrowImage from "./i/arrow-left.svg";
export default function ArrowPrev(props) {
  return (
    <div
      className={props.className}
      style={{ ...props.style }}
      onClick={props.onClick}
    >
      <img src={prevArrowImage} alt="arrow" />
    </div>
  );
}
