import React, { useState, useEffect, useMemo } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

// Styles
import { Wrapper } from "./SlickSlider.styles";
//
import { sliderSettingsDefault } from "../../constant/sliderSettings";
import SlidesRender from "./SlidesRender";

const SlickSlider = ({ slides = [], settings = {}, type = "" }) => {
  
  const [loadedSlides, setLoadedSlides] = useState([]);

  useEffect(() => {

    const fetchSlides = async () => {
      try {
        const response = await fetch("/api/slides");
        const data = await response.json();
        setLoadedSlides(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (slides.length === 0) {
      fetchSlides();
    } else {
      setLoadedSlides(slides);
    }

  }, [slides]);

  const renderedSlides = useMemo(() => {
    const slidesToRender = loadedSlides;
    return slidesToRender.map((slide) => (
      <SlidesRender slide={slide} type={type} />
    ));
  }, [loadedSlides, type]);

  const sliderSettings =
    Object.keys(settings).length > 0 ? settings : sliderSettingsDefault;
  // console.log("sliderSettings :", sliderSettings);

  return <Slider {...sliderSettings}>
    {renderedSlides}
  </Slider>;
};

export default SlickSlider;
