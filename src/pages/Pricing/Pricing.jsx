import React from "react";
// Styles
import { PricingWrapper, Section } from "./Pricing.styles";
import { AnimationUpDown, MaxContainer, Shape } from "../../themes/GlobalStyle";
import Button from "../../components/Button";
import Accordion from "../../components/Accordion";
import Icon from "../../components/Icon";
import SlickSlider from "../../components/SlickSlider";
import {
  sliderSettingsLogo,
  sliderSettingsReviews,
} from "../../constant/sliderSettings";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { ImgWrapper } from "../../components/Image/Image.styles";
import {
  artwok,
  creditOneHome,
  creditStar,
  creditStar2,
  creditStar3,
  mVideo,
  pricingShape,
  pricingShape2,
  trustpilotLogo,
} from "../../components/Image/Image";
import { partnersLogo } from "../../constant/sliderItemInfo";
import Marquee from "../../components/Marquee/Marquee";
import CardCredit from "../../components/CardCredit";
const Pricing = () => {
  return (
    <PricingWrapper>
      <Section className="pricingBanner">
        <div className="pricingBannerWrapper">
          <div className="title">
            <h1>Pricing</h1>
          </div>
        </div>
        <AnimationUpDown second={"1s"} down={"-10px"}>
          <Shape position="absolute" left="200px" top="250px">
            <ImgWrapper src={pricingShape2} />
          </Shape>
        </AnimationUpDown>
        <AnimationUpDown second={"1.3s"} down={"-20px"}>
          <Shape position="absolute" right="200px" top="250px">
            <ImgWrapper src={pricingShape} />
          </Shape>
        </AnimationUpDown>
      </Section>
      <MaxContainer>
        <Section className="price">
          <div className="creditCardWrapper treeColumns">
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
          </div>
          <div className="creditCardWrapper">
            <CardCredit count="5" price="39" sale="49" per="7.80" />
            <CardCredit count="10" price="69" sale="49" per="6.90" />
            <CardCredit count="15" price="99" sale="49" per="6.60" />
            <CardCredit count="20" price="129" sale="149" per="6.90" />
            <CardCredit count="25" price="149" sale="179" per="6.60" />
          </div>
        </Section>
      </MaxContainer>
      <Section className="bannerInfo">
        <div className="banner">
          <div className="item">
            <p>Eligible for menetization</p>
          </div>
          <div className="item">
            <p>Royalty Free</p>
          </div>
          <div className="item">
            <p>New assets added weekly</p>
          </div>
        </div>
        <div className="infoIcon">
          <div className="item">
            <Icon name="ssl" />
            <span>SLL Encrypted Payment</span>
          </div>
          <div className="item">
            <Icon name="checkBlackWhite" />
            <span>Major Payment Providers Accepted</span>
          </div>
          <div className="item">
            <Icon name="loop" />
            <span>Money Bank Guarantee</span>
          </div>
        </div>
      </Section>
      <MaxContainer>
        <Section className="slideLogo">
          <div className="title">
            <span className="cB">used by the</span>
            <span className="cP"> best.</span>
          </div>
          <SlickSlider
            className="logoSlide"
            slideItems={partnersLogo}
            settings={sliderSettingsLogo}
          />
        </Section>
        <Section className="review">
          <SlickSlider
            settings={sliderSettingsReviews}
            className="reviewSlides">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </SlickSlider>
          <div className="trustWrapper">
            <ImgWrapper
              src={trustpilotLogo}
              loading={"lazy"}
              objectFit={"cover"}
            />
          </div>
        </Section>
        <Section className="faqs">
          <div className="info">
            <Button mW="218px" className="blackWhite" title="FAQs" />
            <div className="title">
              <span className="cP">frequently </span>
              <span className="cB">asked questions.</span>
            </div>
          </div>
          <div className="faqsAccordion">
            <Accordion title="How does Lethia work?" className="accFaqs">
              <div className="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                ratione veritatis possimus iste reiciendis reprehenderit
                nostrum, hic exercitationem, et aspernatur aut deserunt. Soluta
                esse non perferendis itaque explicabo dolor suscipit.
              </div>
            </Accordion>
            <Accordion title="How does Lethia work?" className="accFaqs">
              <div className="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                ratione veritatis possimus iste reiciendis reprehenderit
                nostrum, hic exercitationem, et aspernatur aut deserunt. Soluta
                esse non perferendis itaque explicabo dolor suscipit.
              </div>
            </Accordion>
            <Accordion title="How does Lethia work?" className="accFaqs">
              <div className="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                ratione veritatis possimus iste reiciendis reprehenderit
                nostrum, hic exercitationem, et aspernatur aut deserunt. Soluta
                esse non perferendis itaque explicabo dolor suscipit.
              </div>
            </Accordion>
            <Accordion title="How does Lethia work?" className="accFaqs">
              <div className="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                ratione veritatis possimus iste reiciendis reprehenderit
                nostrum, hic exercitationem, et aspernatur aut deserunt. Soluta
                esse non perferendis itaque explicabo dolor suscipit.
              </div>
            </Accordion>
            <Accordion title="How does Lethia work?" className="accFaqs">
              <div className="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                ratione veritatis possimus iste reiciendis reprehenderit
                nostrum, hic exercitationem, et aspernatur aut deserunt. Soluta
                esse non perferendis itaque explicabo dolor suscipit.
              </div>
            </Accordion>
          </div>
          <div className="started">
            <Button
              mW="196px"
              className="btnArrow btnPurpleArrow"
              to="/register">
              <span>Get Started</span>
              <Icon name="arrCirclePurple" />
            </Button>
          </div>
        </Section>
      </MaxContainer>
      <Marquee text="JOIN 100+BRANDS" className="marq" />
    </PricingWrapper>
  );
};

export default Pricing;
