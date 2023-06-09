import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const LayoutFullScreen = () => {
  let getKey = React.useCallback((location, matches) => {
    let match = matches.find((m) => m.handle?.scrollMode);
    if (match?.handle?.scrollMode === "pathname") {
      return location.pathname;
    }
    return location.key;
  }, []);
  return (
    <>
      <main style={{ height: "100%" }}>
        <Outlet />
      </main>
      <ScrollRestoration getKey={getKey} />
    </>
  );
};

export default LayoutFullScreen;
