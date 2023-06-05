import React from "react";
// Styles
import { Section, VideoWrapper, Wrapper } from "./Video.styles";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import { AnimationUpDown, MaxContainer, Shape } from "../../themes/GlobalStyle";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import { ImgWrapper } from "../../components/Image/Image.styles";
import { shapeVideoBanner, videoBanner } from "../../components/Image/Image";
import SlickSlider from "../../components/SlickSlider";
import { partnersLogo } from "../../constant/sliderItemInfo";
import { sliderSettingsLogo } from "../../constant/sliderSettings";
const Video = () => {
  return (
    <VideoWrapper>
      <MaxContainer>
        <Section className="banner">
          <SplitScreen className="split">
            <div className="videoClipsInfo">
              <div className="title">
                <span className="cW">explore </span>{" "}
                <span className="cP">customizable</span>
                <p className="cW">video clips.</p>
              </div>
              <div className="find">
                <div className="custom-input-search">
                  <Icon name="search" />
                  <input
                    type="text"
                    placeholder="Find the perfect template for your video "
                  />
                </div>
              </div>
              <div className="trendings">
                <p className="name">Trending</p>
                <div className="trendWrapper">
                  <span>Logo</span>
                  <span>Vaporware</span>
                  <span>Psychedelic</span>
                  <span>Intro</span>
                </div>
              </div>
              <div className="btnsWrapper">
                <Button
                  mW="180px"
                  className="btnArrow btnPurpleArrow"
                  to="register">
                  <span>Get Started</span>
                  <Icon name="arrCirclePurple" />
                </Button>
                <Button mW="180px" className="btnArrow btnWhite" to="pricing">
                  <span>Pricing</span>
                  <Icon name="arrowCircleWhite" />
                </Button>
              </div>
            </div>
            <div className="infoImg">
              <div className="infoImgWrapper">
                <AnimationUpDown second="0.8s" down="-10px">
                  <ImgWrapper src={videoBanner} lazy="load" objectFit="cover" />
                </AnimationUpDown>
              </div>
            </div>
          </SplitScreen>
          <SlickSlider
            className="logoSlide"
            slideItems={partnersLogo}
            settings={sliderSettingsLogo}
          />
        </Section>
      </MaxContainer>
      <Shape position="absolute" bottom="0" right="0">
        <ImgWrapper src={shapeVideoBanner} />
      </Shape>
    </VideoWrapper>
  );
};

export default Video;
