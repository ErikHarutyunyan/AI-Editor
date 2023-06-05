import React from "react";
// Styles
import { Wrapper, FooterWrapper } from "./Footer.styles";
import { ImgWrapper } from "../Image/Image.styles";
import { footerLogo, logoWhite } from "../Image/Image";
import { NavLink } from "react-router-dom";
import { MaxContainer } from "../../themes/GlobalStyle";
const Footer = () => {
  return (
    <FooterWrapper>
      <MaxContainer>
        <Wrapper>
          <div className="logo">
            <NavLink to="/">
              <ImgWrapper
                src={footerLogo}
                alt="logoWhite"
                width={"230px"}
                height={"65px"}
                objectFit={"cover"}
                loading={"lazy"}
              />
            </NavLink>
            <div className="title">
              <span className="cB">creatives on </span>
              <span className="cP">demand.</span>
            </div>
          </div>
          <div className="menu">
            <div className="links">
              <h3 className="titleMenu">Links</h3>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/videos">Videos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/videos_clips">Videos Clips</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product">Product</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                  </li>
                  <li>
                    <NavLink to="/how_it_works">How it Works</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="contact">
              <h3 className="titleMenu">Contact Us</h3>
              <p>hello@lethia.ai</p>
            </div>
          </div>
        </Wrapper>
      </MaxContainer>
    </FooterWrapper>
  );
};

export default Footer;
