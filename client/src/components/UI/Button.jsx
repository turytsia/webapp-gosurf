import React from "react";

export class ButtonConfig {
  constructor(word, subword, style = {}) {
    this.word = word;
    this.subword = subword;
    this.style = style;
  }
}

export default function Button(props) {
  return (
    <button className="button" style={props.button.style}>
      <span className="button-word">{props.button.word}</span>
      <span className="button-subword">{props.button.subword}</span>
    </button>
  );
}
