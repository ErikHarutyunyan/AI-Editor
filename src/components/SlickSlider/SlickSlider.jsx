import React, { useState, useEffect, useMemo } from "react";
import Slider from "react-slick";

// Styles
import { Wrapper } from "./SlickSlider.styles";
import { sliderSettingsDefault } from "../../constant/sliderSettings";
import SlidesRender from "./SlidesRender";

const SlickSlider = ({
  slides = [],
  settings = {},
  slideItems = [],
  type = "",
  className = "",
}) => {
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
    const slidesToRender = slideItems.length > 0 ? slideItems : loadedSlides;
    return slidesToRender.map((slide) => (
      <SlidesRender slide={slide} type={type} />
    ));
  }, [slideItems, loadedSlides, type]);

  const sliderSettings =
    Object.keys(settings).length > 0 ? settings : sliderSettingsDefault;
  // console.log("sliderSettings :", sliderSettings);

  return (
    <Slider className={className} {...sliderSettings}>
      {renderedSlides}
    </Slider>
  );
};

export default SlickSlider;
