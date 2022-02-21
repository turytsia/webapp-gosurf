import React from "react";
//components
import Title from "./Title";
import Button from "./Button";

export default function Section(props) {
  const imageStyles = {
    src: props.image,
    style: { position: "absolute", right: 0, bottom: "-200%" },
  };
  const Image = props.image && <img {...imageStyles} alt="img" />;
  const sectionClassName = `section ${props.name}`
  return (
    <div className={sectionClassName}>
      <Title text={props.name} />

      {props.children}

      <div className="action">
        {Image}
        <Button button={props.button} />
      </div>
    </div>
  );
}
