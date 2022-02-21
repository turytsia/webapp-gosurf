import React,{useState} from 'react'
//components
import Section from '../UI/Section'
import { ButtonConfig } from '../UI/Button'
import Slider from '../UI/Slider'
import ShopSlide from './ShopSlide'
//data
import  goods from './goods'
export default function Shop() {
    const [currentSlide, setCurrentSlide] = useState();
    const button = new ButtonConfig("go", "surf");
  return (
    <Section name = 'shop' button={button}>
        <Slider
        data={goods}
        setCurrentSlide={setCurrentSlide}
        item={ShopSlide}
      />
    </Section>
  )
}
