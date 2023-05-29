import React from "react";
// Styles
import { Wrapper } from "./Banner.styles";
const Banner = ({ image, children, h }) => {
  return (
    <Wrapper h={h} image={image}>
      {children}
    </Wrapper>
  );
};

export default Banner;
