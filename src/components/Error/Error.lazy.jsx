import React, { lazy, Suspense } from "react";

const LazyError = lazy(() => import("./Error"));

const Error = (props) => (
  <Suspense fallback={null}>
    <LazyError {...props} />
  </Suspense>
);

export default Error;
