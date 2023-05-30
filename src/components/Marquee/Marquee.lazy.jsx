import React, { lazy, Suspense } from "react";

const LazyMarquee = lazy(() => import("./Marquee"));

const Marquee = (props) => (
  <Suspense fallback={null}>
    <LazyMarquee {...props} />
  </Suspense>
);

export default Marquee;
