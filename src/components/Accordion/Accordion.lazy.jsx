import React, { lazy, Suspense } from "react";

const LazyAccordion = lazy(() => import("./Accordion"));

const Accordion = (props) => (
  <Suspense fallback={null}>
    <LazyAccordion {...props} />
  </Suspense>
);

export default Accordion;
