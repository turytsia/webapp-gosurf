import React from "react";

export default function Subtitle(props) {
  const alignRight = props.align === "right";

  const title = props.title;
  const subtitle = (
    <>
      {props.text}
      <>
        {props.subtext && (
          <>
            {" "}
            <span className="section-subtitle__sub-line">|</span>{" "}
            {props.subtext}
          </>
        )}
      </>
    </>
  );

  const position = {
    right: props.right,
    left: props.left,
    top: props.top,
    bottom: props.bottom,
  };

  const subtitleAlign = alignRight
    ? "section-subtitle--right"
    : "section-subtitle--left";
  const headAlign = alignRight
    ? "section-subtitle-head--right"
    : "section-subtitle-head--left";
  return (
    <span style={position} className={`section-subtitle ${subtitleAlign}`}>
      <span className={`section-subtitle-head ${headAlign}`}>{title}</span>
      <span className="section-subtitle__sub">{subtitle}</span>
    </span>
  );
}
