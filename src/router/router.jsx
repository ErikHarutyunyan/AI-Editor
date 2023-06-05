import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'
import { Layout, LayoutFullScreen } from "../layout/index.jsx";
import {
  ABOUT,
  BLOG,
  HOME,
  NOT_FOUND_PAGE,
  SINGLE_BLOG,
  PRICING,
  VIDEO,
} from "./route-path";
import TokenService from "../services/token.service";
// Pages
import {
  About,
  Blog,
  ErrorPage,
  Home,
  Login,
  NotFoundPage,
  Register,
  SingleBlog,
  Forgot,
  Pricing,
  Video,
} from "../pages";
import PrivateRouter from "./PrivateRouter";

const user = TokenService.getUser() || null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path={ABOUT}
          element={<About />}
          handle={{ scrollMode: "pathname" }}>
          <Route path="contacts" element={<h2>Contact </h2>} />
          <Route path="team" element={<h2>Team </h2>} />
        </Route>
        <Route
          path={BLOG}
          element={
            <PrivateRouter>
              <Blog />
            </PrivateRouter>
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path={SINGLE_BLOG}
          element={
            <PrivateRouter>
              <SingleBlog />
            </PrivateRouter>
          }
          errorElement={<ErrorPage />}
        />
        <Route path={PRICING} element={<Pricing />} />
        <Route path={VIDEO} element={<Video />} />
        {/* <Route
          path="/profile"
          element={
            <PrivateRouter>
              <Profile />
            </PrivateRouter>
          }

        />

         */}
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Route>
      <Route element={<LayoutFullScreen />}>
        {user ? (
          <Route index path="/login" element={<Navigate to={"/"} />} />
        ) : (
          <Route index path="/login" element={<Login />} />
        )}
        {user ? (
          <Route path="/register" element={<Navigate to="/" />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
        {user ? (
          <Route path="/forgot" element={<Navigate to="/" />} />
        ) : (
          <Route path="/forgot" element={<Forgot />} />
        )}
      </Route>
    </>
  )
);

export default router;
