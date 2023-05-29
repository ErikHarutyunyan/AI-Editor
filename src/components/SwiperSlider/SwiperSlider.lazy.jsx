import React, { lazy, Suspense } from "react";

const LazySwiperSlider = lazy(() => import("./SwiperSlider"));

const SwiperSlider = (props) => (
  <Suspense fallback={null}>
    <LazySwiperSlider {...props} />
  </Suspense>
);

export default SwiperSlider;
