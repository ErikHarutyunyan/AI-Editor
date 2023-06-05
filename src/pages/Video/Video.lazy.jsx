import React, { lazy, Suspense } from "react";

const LazyVideo = lazy(() => import("./Video"));

const Video = (props) => (
  <Suspense fallback={null}>
    <LazyVideo {...props} />
  </Suspense>
);

export default Video;
