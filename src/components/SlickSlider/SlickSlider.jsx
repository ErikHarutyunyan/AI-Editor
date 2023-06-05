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
  children,
}) => {
  const [loadedSlides, setLoadedSlides] = useState([]);
  const checkChildren = children !== undefined;
  console.log("checkChildren :", checkChildren);
  useEffect(() => {
    if (checkChildren) {
      const fetchSlides = async () => {
        try {
          const response = await fetch("/api/slides");
          const data = await response.json();
          setLoadedSlides(data);
        } catch (error) {
          // console.error(error);
        }
      };

      if (slides.length === 0) {
        fetchSlides();
      } else {
        setLoadedSlides(slides);
      }
    }
  }, [checkChildren, slides]);

  const renderedSlides = useMemo(() => {
    const slidesToRender = slideItems.length > 0 ? slideItems : loadedSlides;
    return slidesToRender.map((slide, index) => (
      <SlidesRender slide={slide} type={type} key={index} />
    ));
  }, [slideItems, loadedSlides, type]);

  const sliderSettings =
    Object.keys(settings).length > 0 ? settings : sliderSettingsDefault;

  if (children !== undefined) {
    return (
      <Slider className={className} {...sliderSettings}>
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Slider>
    );
  }

  return (
    <Slider className={className} {...sliderSettings}>
      {renderedSlides}
    </Slider>
  );
};

export default SlickSlider;
