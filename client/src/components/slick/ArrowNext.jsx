import React from "react";
import nextArrowImage from "./i/arrow-right.svg";
export default function ArrowNext(props) {
  return (
    <div
      className={props.className}
      style={{ ...props.style }}
      onClick={props.onClick}
    >
      <img src={nextArrowImage} alt="arrow" />
    </div>
  );
}
