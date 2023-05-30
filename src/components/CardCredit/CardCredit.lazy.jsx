import React, { lazy, Suspense } from "react";

const LazyCardCredit = lazy(() => import("./CardCredit"));

const CardCredit = (props) => (
  <Suspense fallback={null}>
    <LazyCardCredit {...props} />
  </Suspense>
);

export default CardCredit;
