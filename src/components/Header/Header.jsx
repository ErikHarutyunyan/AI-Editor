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
import { logoWhite } from "../Image/Image";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { MaxContainer } from "../../themes/GlobalStyle";

const Header = () => {
  const [showVideos, setShowVideos] = useState(false);

  const handleVideosHover = () => {
    setShowVideos(true);
  };

  const handleVideosLeave = () => {
    setShowVideos(false);
  };

  return (
    <HeaderWrapper>
      <MaxContainer>
        <Wrapper>
          <div className="logo">
            <NavLink to="/">
              <ImgWrapper
                src={logoWhite}
                alt="logoWhite"
                width={"256px"}
                height={"41px"}
                objectFit={"contain"}
                loading={"lazy"}
              />
            </NavLink>
          </div>
          <div className="menu">
            <NavContainer>
              <NavList>
                <NavItem className="menu">
                  <NavLink to="/videos">Videos</NavLink>
                </NavItem>
                <NavItem className="menu">
                  <NavLink to="/">Video Clips</NavLink>
                </NavItem>
                <NavItem className="menu">
                  <NavLink to="/pricing">Pricing</NavLink>
                </NavItem>
              </NavList>
            </NavContainer>
            <div className="buttonsContainer">
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
            </div>
          </div>
        </Wrapper>
      </MaxContainer>
    </HeaderWrapper>
  );
};

export default Header;
