import {
  LogoNextArrow,
  LogoPrevArrow,
} from "../components/SlickSlider/SlidesRender";

export const sliderSettingsDefault = Object.freeze({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  arrows: false,
});

export const sliderSettingsLogo = {
  easing: "ease-in-out",
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
};

export const sliderSettingsReviews = Object.freeze({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: true,
  arrows: true,
  prevArrow: <LogoPrevArrow />,
  nextArrow: <LogoNextArrow />,
});
