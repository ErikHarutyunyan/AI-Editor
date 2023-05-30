import React from "react";
import {
  addText,
  arrowBig,
  artwok,
  capsula2,
  capsule,
  creditOneHome,
  creditStar,
  creditStar2,
  creditStar3,
  lyricsPromo1,
  lyricsPromo2,
  mVideo,
  mVideo1,
  mVideo2,
  oicture,
  play,
  resize,
  shadow,
  spotCanvas,
  spotifyLogo,
  trim,
  trustpilotLogo,
  video,
  visual1,
  visual2,
  visul1,
  visul2,
  visul3,
  wave,
} from "../../components/Image/Image";
import { HomeWrapper, Section, Wrapper } from "./Home.styles";
import Button from "../../components/Button";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import { MaxContainer, Shape } from "../../themes/GlobalStyle";

import Icon from "./../../components/Icon";
import { ImgWrapper } from "../../components/Image/Image.styles";

// Slide
// import { Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";

import SlickSlider from "../../components/SlickSlider";
import { partnersLogo } from "../../constant/sliderItemInfo";
import { sliderSettingsLogo } from "../../constant/sliderSettings";
import CardCredit from "./../../components/CardCredit/index";
import Marquee from "../../components/Marquee/Marquee";

const Home = () => {
  return (
    <HomeWrapper>
      <MaxContainer>
        <Section className="homeBanner">
          <Wrapper pLR={"80px"}>
            <SplitScreen>
              <div className="videoCreation">
                <div className="title">
                  <h2 className="cB">Video creation.</h2>
                  <h2 className="cP">made easy.</h2>
                </div>
                <div className="desc">
                  <p className="cB">
                    Make artistic videos from your lyrics seamlessly with
                    Lethia's advanced AI. No editing skills needed.
                  </p>
                </div>
                <div className="btnsWrapper">
                  <Button
                    mW="180px"
                    className="btnArrow btnPurpleArrow"
                    to="register">
                    <span>Get Started</span>
                    <Icon name="arrCirclePurple" />
                  </Button>
                  <Button
                    mW="180px"
                    className="btnArrow btnBlackArrow"
                    to="login">
                    <span>Log In</span>
                    <Icon name="arrowCircleBlack" />
                  </Button>
                </div>
                <div className="trustWrapper">
                  <ImgWrapper
                    src={trustpilotLogo}
                    loading={"lazy"}
                    objectFit={"cover"}
                  />
                </div>
              </div>
              <div className="infoGuide">
                <ImgWrapper
                  src={oicture}
                  loading={"lazy"}
                  objectFit={"cover"}
                  className="homeImg"
                />
                <div className="optionContainer">
                  <div className="options">
                    <div className="optionsWrapper">
                      <Icon name={"checkPurple"} />
                      <span>Spotify Canvas</span>
                    </div>
                    <div className="optionsWrapper">
                      <Icon name={"checkPurple"} />
                      <span>Music Videos</span>
                    </div>
                  </div>
                  <div className="options">
                    <div className="optionsWrapper">
                      <Icon name={"checkPurple"} />
                      <span>Lyric Videos</span>
                    </div>
                    <div className="optionsWrapper">
                      <Icon name={"checkPurple"} />
                      <span>Visualizers</span>
                    </div>
                  </div>
                </div>
              </div>
            </SplitScreen>
          </Wrapper>
        </Section>
        <Section className="slideLogo">
          <SlickSlider
            className="logoSlide"
            slideItems={partnersLogo}
            settings={sliderSettingsLogo}
          />
        </Section>
        <Section className="doesWork">
          <div className="info">
            <Button
              mW="218px"
              className="blackWhite"
              title="How Does It Work?"
            />
            <div className="title">
              <span className="cP">just </span>
              <span className="cB">add music</span>
            </div>
            <div className="desc">
              <p className="cB">
                Lethia’s AI analyzes your music and chosen clips, and within
                minutes automatically generates a professional quality video cut
                to your music.
              </p>
            </div>
          </div>
          <div className="visual">
            <ImgWrapper src={wave} />
            <ImgWrapper src={arrowBig} objectFit={"contain"} />
            <div className="wrapperImg">
              <ImgWrapper src={visual1} className="img1" />
              <ImgWrapper src={visual2} className="img2" />
            </div>
          </div>
          <div className="started">
            <Button mW="196px" className="btnArrow btnBlackArrow" to="register">
              <span>Get Started</span>
              <Icon name="arrowCircleBlack" />
            </Button>
          </div>
          <Shape position={"absolute"} top="45%" right="0">
            <ImgWrapper src={capsule} objectFit="cover" />
          </Shape>
        </Section>
        <Section className="demo">
          <div className="info">
            <div className="title">
              <span className="cB">ceatives on </span>
              <span className="cP">demond.</span>
            </div>
            <div className="desc">
              <p className="cB">
                Create a wide range of art all from your music.
              </p>
            </div>
          </div>
          <div className="cardsDemoWrapper">
            <div className="cardsDemo cardsDemoLyricsPromo">
              <div className="imgWrappers">
                <div className="box">
                  <ImgWrapper src={lyricsPromo2} />
                  <span>A silver lining worth searching for</span>
                </div>
                <div className="box">
                  <ImgWrapper src={lyricsPromo1} />
                  <span>Think og all the good</span>
                </div>
              </div>
              <div className="infoCard">
                <h3>Lyrics & Promo Videos</h3>
                <p>
                  We provide the tools for you to easily resize your videos for
                  social media and add text or lyrics to your videos. Done in
                  seconds.
                </p>
                <Button
                  mW="196px"
                  className="btnArrow btnBlackArrow"
                  to="login">
                  <span>Create Now</span>
                  <Icon name="arrowCircleBlack" />
                </Button>
              </div>
            </div>
            <div className="cardsDemo cardsDemoSpotify">
              <div className="infoWrapper">
                <div className="phone">
                  <ImgWrapper src={spotCanvas} />
                </div>
                <div className="infoCard">
                  <ImgWrapper src={spotifyLogo} className="spotLogo" />
                  <h3>Spotify Canvas</h3>
                  <p>
                    We provide the tools for you to easily resize your videos
                    for social media and add text or lyrics to your videos. Done
                    in seconds.
                  </p>
                  <Button
                    mW="196px"
                    className="btnArrow btnBlackArrow"
                    to="login">
                    <span>Create Now</span>
                    <Icon name="arrowCircleBlack" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="cardsDemo cardsDemoVisualizer">
              <div className="imgWrappers">
                <ImgWrapper src={visul1} />
                <ImgWrapper src={visul2} />
                <ImgWrapper src={visul3} />
              </div>
              <div className="infoCard">
                <h3>Visualizer Videos</h3>
                <p>
                  Upload your existing release artwork and get an on brand video
                  that vibes to the beat. Sit back and let Lethia do the work.
                </p>
                <Button
                  mW="196px"
                  className="btnArrow btnBlackArrow"
                  to="login">
                  <span>Create Now</span>
                  <Icon name="arrowCircleBlack" />
                </Button>
              </div>
            </div>
            <div className="cardsDemo cardsDemoMusicVideos cardsDemoLyricsPromo">
              <div className="imgWrappers">
                <div className="box">
                  <ImgWrapper src={mVideo2} />
                </div>
                <div className="box">
                  <ImgWrapper src={mVideo1} />
                </div>
              </div>
              <div className="infoCard">
                <h3>Lyrics & Promo Videos</h3>
                <p>
                  We provide the tools for you to easily resize your videos for
                  social media and add text or lyrics to your videos. Done in
                  seconds.
                </p>
                <Button
                  mW="196px"
                  className="btnArrow btnBlackArrow"
                  to="login">
                  <span>Create Now</span>
                  <Icon name="arrowCircleBlack" />
                </Button>
              </div>
            </div>
          </div>
          <Shape position={"absolute"} top="0%" left="100px">
            <ImgWrapper src={capsule} objectFit="cover" />
          </Shape>
        </Section>
        <Section className="why">
          <div className="info">
            <Button mW="218px" className="blackWhite" title="Why Lethia?" />
            <div className="title">
              <span className="cB">ceatives on </span>
              <span className="cP">demond.</span>
            </div>
            <div className="desc">
              <p className="cB">
                Lethia's advanced AI makes it easy to generate unlimited
                creatives, on demand.
              </p>
            </div>
          </div>
          <div className="cardWrapper">
            <div className="card">
              <div className="cardInfo">
                <h3>Visual Excellence</h3>
                <p>
                  Create visually eye-catching artwork and videos straight from
                  our collection of prompts
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cardInfo">
                <h3>Fast & Easy</h3>
                <p>
                  Simply enter a prompt, upload your lyrics and let Lethia do
                  all the hard work.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cardInfo">
                <h3>Unlimited Creatives</h3>
                <p>
                  With Lethia, there's no limit to what you can do. Create
                  artwork within seconds, with no limit.
                </p>
              </div>
            </div>
          </div>
          <Shape position="absolute" top="0" left="0">
            <ImgWrapper src={shadow} />
          </Shape>
          <Shape position="absolute" top="0" right="0">
            <ImgWrapper src={capsula2} />
          </Shape>
        </Section>
        <Section className="features">
          <div className="info">
            <Button mW="218px" className="blackWhite" title="Features" />
            <div className="title">
              <span className="cB">Lethia makes it </span>
              <span className="cP">easy.</span>
            </div>
            <div className="desc">
              <p className="cB">
                Lethia's got everything you need — trim your video, add text,
                resize it for different social media apps
              </p>
            </div>
          </div>
          <div className="toolsWrapper">
            <div className="tools">
              <ImgWrapper src={addText} className="imgTool" />
              <h3>Add Text.</h3>
              <p>Add text or promotional messaging throughout your video</p>
            </div>
            <div className="tools">
              <ImgWrapper src={resize} className="imgTool" />
              <h3>Resize</h3>
              <p>
                Let us handle resizing your videos so your artists look great on
                every platform
              </p>
            </div>
            <div className="tools">
              <ImgWrapper src={trim} className="imgTool" />
              <h3>Trim</h3>
              <p>
                Turn your music videos into promo and Spotify canvas videos in
                seconds
              </p>
            </div>
          </div>
          <div className="started">
            <Button mW="196px" className="btnArrow btnBlackArrow" to="register">
              <span>Get Started</span>
              <Icon name="arrowCircleBlack" />
            </Button>
          </div>
        </Section>
        <Section className="creativesVideo">
          <div className="info">
            <Button mW="218px" className="blackWhite" title="Showcase" />
            <div className="title">
              <span className="cB">creatives </span>
              <span className="cP">made by </span>
              <span className="cB">Lethia.</span>
            </div>
            <div className="desc">
              <p className="cB">Some of our designs - all made in seconds.</p>
            </div>
          </div>
          <div className="videoBoxWrapper">
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
            <div className="videoBox">
              <ImgWrapper src={video} />
              <ImgWrapper src={play} className="playBtn" />
            </div>
          </div>
          <div className="started">
            <Button mW="196px" className="btnArrow btnBlackArrow" to="register">
              <span>Get Started</span>
              <Icon name="arrowCircleBlack" />
            </Button>
          </div>
        </Section>
        <Section className="price">
          <div className="info">
            <Button mW="218px" className="blackWhite" title="Pricing" />
            <div className="title">
              <span className="cB">creatives on </span>
              <span className="cP">demand.</span>
            </div>
            <div className="desc">
              <p className="cB">Choose your credits. Create when you want.</p>
            </div>
          </div>
          <div className="creditCardWrapper">
            <div className="creditCard creditCard-one">
              <div className="creditCardHeader">
                <div className="star">
                  <ImgWrapper src={creditStar} />
                </div>
                <div className="count">1 Credit</div>
              </div>
              <div className="creditCardBody">
                <ImgWrapper src={creditOneHome} />
              </div>
              <div className="creditFooter">
                <div className="title">
                  <h3>Short Video</h3>
                </div>
                <div className="options">
                  <div className="option">
                    <Icon name="checkWhite" />
                    <span>Spotify Canvas</span>
                  </div>
                  <div className="option">
                    <Icon name="checkWhite" />
                    <span>Videos under 1 minute</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="creditCard creditCard-two">
              <div className="creditCardHeader">
                <div className="star">
                  <ImgWrapper src={creditStar2} />
                </div>
                <div className="count">2 Credit</div>
              </div>
              <div className="creditCardBody">
                <ImgWrapper src={artwok} />
              </div>
              <div className="creditFooter">
                <div className="title">
                  <h3>Artwork</h3>
                </div>
                <div className="options">
                  <div className="option">
                    <Icon name="checkWhite" />
                    <span>Album Artwork</span>
                  </div>
                  <div className="option">
                    <Icon name="checkWhite" />
                    <span>Visualizers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="creditCard creditCard-tree">
              <div className="creditCardHeader">
                <div className="star">
                  <ImgWrapper src={creditStar3} />
                </div>
                <div className="count">1 Credit</div>
              </div>
              <div className="creditCardBody">
                <ImgWrapper src={mVideo} />
              </div>
              <div className="creditFooter">
                <div className="title">
                  <h3>Music Videos</h3>
                </div>
                <div className="options">
                  <div className="option">
                    <Icon name="checkWhite" />
                    <span>Lyric Videos</span>
                  </div>
                  <div className="option">
                    <Icon name="checkWhite" />
                    <span>Promo Videos</span>
                  </div>
                </div>
              </div>
            </div>
            <CardCredit count="5" price="39" sale="49" per="7.80" />
            <CardCredit count="10" price="69" sale="49" per="6.90" />
            <CardCredit count="15" price="99" sale="49" per="6.60" />
            <CardCredit count="20" price="129" sale="149" per="6.90" />
            <CardCredit count="25" price="149" sale="179" per="6.60" />
          </div>
        </Section>
      </MaxContainer>
      <Marquee text="JOIN 100+BRANDS" className="marq"/>
    </HomeWrapper>
  );
};

export default Home;
