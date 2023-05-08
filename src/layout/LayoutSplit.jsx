import React from 'react'
import {Outlet, ScrollRestoration} from "react-router-dom"

const LayoutSplit = () => {

  let getKey = React.useCallback(
    (location, matches) => {
      let match = matches.find((m) => (m.handle)?.scrollMode);
      if ((match?.handle)?.scrollMode === "pathname") {
        return location.pathname;
      }
      return location.key;
    },
    []
  );
  return (
    <>
      <main>
        <Outlet/>
      </main>
      <ScrollRestoration getKey={getKey}/>
    </>
  );
}

export default LayoutSplit