import React from "react";
import { LogoNextArrowWrapper, LogoPrevArrowWrapper, PartnerLogo } from "./SlickSlider.styles";

export function LogoNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LogoNextArrowWrapper
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24">
        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
      </svg>
    </LogoNextArrowWrapper>
  );
}

export function LogoPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LogoPrevArrowWrapper
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24">
        <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293" />
      </svg>
    </LogoPrevArrowWrapper>
  );
}

const SlidesRender = ({ type = "", slide = null }) => {
  if (type === "" && slide !== null) {
    return (
      <div key={slide.id} className={slide.className}>
        <img src={slide.src} alt={slide.alt} />
      </div>
    );
  }
  if (type === "logo" && slide !== null) {
    return (
      <PartnerLogo href="/" key={slide.id} className={slide.className}>
        <div className={`${slide.className}-child`}>
          <img src={slide.src} alt={slide.alt} />
        </div>
      </PartnerLogo>
    );
  }
};

export default SlidesRender;
