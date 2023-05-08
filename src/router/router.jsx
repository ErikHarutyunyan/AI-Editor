import React from "react";
import {createBrowserRouter, createRoutesFromElements, Navigate, Route,} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'
import {Layout, LayoutSplit} from "../layout/index.jsx";
import {ABOUT, BLOG, HOME, NOT_FOUND_PAGE, SINGLE_BLOG} from "./route-path";
import TokenService from "../services/token.service";
// Pages
import {About, Blog, ErrorPage, Home, Login, NotFoundPage, SingleBlog,} from "../pages";
import PrivateRouter from "./PrivateRouter";


const user = TokenService.getUser() || null;
console.log("user", user);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME} element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route
          path={ABOUT}
          element={<About/>}
          handle={{scrollMode: "pathname"}}
        >
          <Route path="contacts" element={<h2>Contact </h2>}/>
          <Route path="team" element={<h2>Team </h2>}/>
        </Route>
        <Route
          path={BLOG}
          element={
            <PrivateRouter>
              <Blog/>
            </PrivateRouter>
          }
          errorElement={<ErrorPage/>}
        />
        <Route
          path={SINGLE_BLOG}
          element={
            <PrivateRouter>
              <SingleBlog/>
            </PrivateRouter>
          }
          errorElement={<ErrorPage/>}
        />

        {/* <Route
          path="/profile"
          element={
            <PrivateRouter>
              <Profile />
            </PrivateRouter>
          }

        />

         */}
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage/>}/>
      </Route>
      <Route element={<LayoutSplit/>}>
        {user ? (
          <Route index path="/login" element={<Navigate to={"/"}/>}/>
        ) : (
          <Route index path="/login" element={<Login/>}/>
        )}
        {/*{user ? (*/}
        {/*  <Route path="/register" element={<Navigate to="/" />} />*/}
        {/*) : (*/}
        {/*  <Route path="/register" element={<Register />} />*/}
        {/*)}*/}
      </Route>

    </>
  )
);

export default router;
