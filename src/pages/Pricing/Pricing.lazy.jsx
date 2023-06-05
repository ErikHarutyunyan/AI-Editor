import React, { lazy, Suspense } from "react";

const LazyPricing = lazy(() => import("./Pricing"));

const Pricing = (props) => (
  <Suspense fallback={null}>
    <LazyPricing {...props} />
  </Suspense>
);

export default Pricing;
