import React, { lazy, Suspense } from "react";

const LazyCreatePassword = lazy(() => import("./CreatePassword"));

const CreatePassword = (props) => (
  <Suspense fallback={null}>
    <LazyCreatePassword {...props} />
  </Suspense>
);

export default CreatePassword;
