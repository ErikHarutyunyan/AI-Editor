import React, { lazy, Suspense } from "react";

const LazySlider = lazy(() => import("./SlickSlider"));

const Slider = (props) => (
  <Suspense fallback={null}>
    <LazySlider {...props} />
  </Suspense>
);

export default Slider;
