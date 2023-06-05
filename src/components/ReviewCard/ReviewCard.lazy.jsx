import React, { lazy, Suspense } from "react";

const LazyReviewCard = lazy(() => import("./ReviewCard"));

const ReviewCard = (props) => (
  <Suspense fallback={null}>
    <LazyReviewCard {...props} />
  </Suspense>
);

export default ReviewCard;
