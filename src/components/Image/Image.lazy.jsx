import React, { lazy, Suspense } from "react";
import { ImgWrapper } from "./Image.styles";

const images = {
  bgAuth: lazy(() => import("../../assets/images/bgAuth.png")),
  shape1: lazy(() => import("../../assets/images/shape1.png")),
  shapeReg1: lazy(() => import("../../assets/images/shapeReg1.png")),
  shapeReg2: lazy(() => import("../../assets/images/shapeReg2.png")),
  shapeForgot: lazy(() => import("../../assets/images/shapeForgot.png")),
  passUpdate: lazy(() => import("../../assets/images/passUpdate.png")),
  // add more images here as needed
};

const Image = ({ name, ...props }) => {
  const LazyImage = images[name];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyImage {...props} />
    </Suspense>
  );
};

export default Image;
