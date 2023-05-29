import React, { lazy, Suspense } from "react";

const LazyBanner = lazy(() => import("./Banner"));

const Banner = (props) => (
  <Suspense fallback={null}>
    <LazyBanner {...props} />
  </Suspense>
);

export default Banner;
