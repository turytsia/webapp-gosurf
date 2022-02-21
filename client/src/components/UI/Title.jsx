import React from "react";

export default function Title(props) {
  return (
    <span className="section-title">
      <h3>{props.text}</h3>
      <span className="section-title__sub">{props.text}</span>
    </span>
  );
}
