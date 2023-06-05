import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = () => {
  let getKey = React.useCallback((location, matches) => {
    let match = matches.find((m) => m.handle?.scrollMode);
    if (match?.handle?.scrollMode === "pathname") {
      return location.pathname;
    }
    return location.key;
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration getKey={getKey} />
      <Footer />
    </>
  );
};

export default Layout;
