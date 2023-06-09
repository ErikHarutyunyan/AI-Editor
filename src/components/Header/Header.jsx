import React, { useState } from "react";
// Styles
import {
  HeaderWrapper,
  NavContainer,
  NavItem,
  NavList,
  Wrapper,
} from "./Header.styles";

import { ImgWrapper } from "./../Image/Image.styles";
import { logoWhite, transparentLogo } from "../Image/Image";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { MaxContainer } from "../../themes/GlobalStyle";
import { useLocation } from "react-router-dom";

const getLastPathname = (pathname) => {
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];
  return lastSegment;
};

const Header = () => {
  const [showVideos, setShowVideos] = useState(false);

  const handleVideosHover = () => {
    setShowVideos(true);
  };

  const handleVideosLeave = () => {
    setShowVideos(false);
  };

  const location = useLocation();
  const segment = getLastPathname(location.pathname);

  return (
    <HeaderWrapper page={segment}>
      <MaxContainer>
        <Wrapper page={segment}>
          <div className="logo">
            <NavLink to="/">
              {segment !== "" ? (
                <ImgWrapper
                  src={transparentLogo}
                  alt="logoWhite"
                  width={"110px"}
                  height={"50px"}
                  objectFit={"contain"}
                  loading={"lazy"}
                  className="trnsLogo"
                />
              ) : (
                <ImgWrapper
                  src={logoWhite}
                  alt="logoWhite"
                  width={"256px"}
                  height={"41px"}
                  objectFit={"contain"}
                  loading={"lazy"}
                />
              )}
            </NavLink>
          </div>
          <div className="menu">
            <NavContainer>
              <NavList>
                <NavItem className="menu" page={segment}>
                  <NavLink to="/videos">Video Clips</NavLink>
                </NavItem>
                <NavItem className="menu" page={segment}>
                  <NavLink to="/pricing">Pricing</NavLink>
                </NavItem>
                <NavItem className="menu" page={segment}>
                  <NavLink to="/">Support</NavLink>
                </NavItem>
              </NavList>
            </NavContainer>
            <div className="buttonsContainer">
              <>
                <Button
                  type="button"
                  className="blackWhite"
                  title={"Login"}
                  mW={"160px"}
                  align="center"
                  to="/login"
                  paddings="0.75rem 3.5313rem"
                />
                <Button
                  type="submit"
                  className="btnPurple"
                  title={"Get Started"}
                  mW={"160px"}
                  align="center"
                  to="/register"
                  paddings="0.75rem 2rem"
                />
              </>
            </div>
          </div>
        </Wrapper>
      </MaxContainer>
    </HeaderWrapper>
  );
};

export default Header;
