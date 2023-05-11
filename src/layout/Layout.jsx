import React from 'react'
import {NavLink, Outlet, ScrollRestoration} from "react-router-dom"
import { ABOUT, BLOG, HOME } from '../router/route-path';
import Header from './../components/Header';
const Layout = () => {

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
      <Header/>
      <main>
        <Outlet />
      </main>
      <ScrollRestoration getKey={getKey} />
    </>
  );
}

export default Layout