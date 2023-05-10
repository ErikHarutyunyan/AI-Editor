import React, { lazy, Suspense } from "react";

const LazyForgot = lazy(() => import("./Forgot"));

const Forgot = (props) => (
  <Suspense fallback={null}>
    <LazyForgot {...props} />
  </Suspense>
);

export default Forgot;
