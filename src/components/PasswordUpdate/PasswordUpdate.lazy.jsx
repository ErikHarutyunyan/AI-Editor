import React, { lazy, Suspense } from "react";

const LazyPasswordUpdate = lazy(() => import("./PasswordUpdate"));

const PasswordUpdate = (props) => (
  <Suspense fallback={null}>
    <LazyPasswordUpdate {...props} />
  </Suspense>
);

export default PasswordUpdate;
