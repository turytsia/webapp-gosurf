import React, { useState } from "react";
//images
import flowers from "./i/flowers.png";
//components
import SleepSlide from "./SleepSlide";
import Slider from "../UI/Slider";
import Section from "../UI/Section";
import { ButtonConfig } from "../UI/Button";
import SleepInfo from './SleepInfo'
//data
import data from "../data.js";

export default function Travel() {
  const [currentSlide, setCurrentSlide] = useState();
  const button = new ButtonConfig("book", "stay");

  return (
    <Section name="sleep" button={button} image={flowers}>
      <Slider
        data={data}
        setCurrentSlide={setCurrentSlide}
        item={SleepSlide}
      />
      <SleepInfo />
    </Section>
  );
}
