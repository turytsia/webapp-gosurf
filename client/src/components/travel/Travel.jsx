import React, { useState } from "react";
//images
import cocktail from "./i/cocktail.png";
//components
import TravelSlide from "./TravelSlide";
import Slider from "../UI/Slider";
import TravelInfo from "./TravelInfo";
import Section from "../UI/Section";
import { ButtonConfig } from "../UI/Button";
//data
import data from "../data.js";

export default function Travel() {
  const [currentSlide, setCurrentSlide] = useState();
  const button = new ButtonConfig("book", "flight");

  return (
    <Section name="travel" button={button} image={cocktail}>
      <Slider
        data={data}
        setCurrentSlide={setCurrentSlide}
        item={TravelSlide}
      />
      <TravelInfo />
    </Section>
  );
}
