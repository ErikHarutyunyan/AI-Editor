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
import { logoHeader1 } from "../Image/Image";
import { NavLink } from "react-router-dom";
import Button from "../Button";


const Header = () => {
  // const [showVideos, setShowVideos] = useState(false);

  // const handleVideosHover = () => {
  //   setShowVideos(true);
  // };

  // const handleVideosLeave = () => {
  //   setShowVideos(false);
  // };

  return (
    <HeaderWrapper>
      <div className="divider"></div>
      <Wrapper>
        <div className="logo">
          <NavLink exact to="/login">
            <ImgWrapper
              src={logoHeader1}
              alt="logoHeader1"
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
              <NavItem>
                <NavLink exact to="/">
                  Videos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Video Clips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/pricing">Pricing</NavLink>
              </NavItem>
              {/* <NavItem
              onMouseEnter={handleVideosHover}
              onMouseLeave={handleVideosLeave}>
              <NavLinkItem to="/videos">Videos</NavLinkItem>
              {showVideos && (
                <NavSubLinks>
                  <NavSubLinkItem>
                    <NavLinkItem to="/video-clips">Video Clips</NavLinkItem>
                  </NavSubLinkItem>
                  <NavSubLinkItem>
                    <NavLinkItem to="/price">Price</NavLinkItem>
                  </NavSubLinkItem>
                </NavSubLinks>
              )}
            </NavItem> */}
            </NavList>
          </NavContainer>
          <div className="buttonsContainer">
            <NavLink to="/login">
              <Button
                type="button"
                className="btnWhite"
                title={"Login"}
                mW={"130px"}
                align="center"
              />
            </NavLink>
            <NavLink to="/register">
              <Button
                type="submit"
                className="btnPurple"
                title={"Get Started For Free"}
                mW={"190px"}
                align="center"
              />
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
