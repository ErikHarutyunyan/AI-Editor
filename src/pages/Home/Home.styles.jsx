import styled from "styled-components";
import { elipseHome, groupCapsule } from "../../components/Image/Image";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 ${(props) => (props?.pLR ? props.pLR : "1.25rem")};
`;

export const BannerWrapper = styled.div`
  max-width: ${(props) => props?.mW};
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
  .titleWrapper {
    display: flex;
    max-width: 59.6875rem;
    width: 100%;
    margin: 0 auto;
    padding-top: 11.3125rem;
    padding-bottom: 3.625rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    row-gap: 3.125rem;
    h1 {
      font-weight: 600;
      font-size: 3.75rem;
      line-height: 150%;
      text-align: center;
      color: var(--color-white);
    }
    h3 {
      font-weight: 400;
      font-size: 2.5rem;
      line-height: 120%;
      text-align: center;
      color: var(--color-white);
      padding: 0 0.625rem;
    }
  }
  .titleWrapperCreateVideo {
    text-align: center;
    padding-top: 12.5rem;
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 3.75rem;
      line-height: 150%;
      color: var(--color-white);
    }
    h2:last-child {
      padding-bottom: 8.5625rem;
    }
  }
`;

export const Section = styled.section`
  &.homeBanner {
    margin-top: 1.25rem;
  }

  .title {
    h2 {
      font-family: var(--font-2);
      font-style: normal;
      font-weight: 700;
      font-size: 3.375rem;
      line-height: 3.125rem;
    }
  }

  .desc {
    p {
      font-family: var(--font-1);
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 150%;
      text-align: center;
    }
  }

  .videoCreation {
    padding-top: 9rem;
    .desc {
      margin-top: 2rem;
      p {
        text-align: left;
      }
    }
    .btnsWrapper {
      margin-top: 2.5rem;
      column-gap: 1rem;
      display: flex;
      .btnPurpleArrow {
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
        color: var(--color-white);
      }
    }
    .trustWrapper {
      margin-top: 2rem;
    }
  }

  .infoGuide {
    position: relative;
    background: url(${elipseHome});
    background-position: center;
    background-size: 100% 100%;
    .homeImg {
      padding-top: 4rem;
    }
    .optionContainer {
      max-width: 20.4375rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;
      justify-content: space-between;
      margin-left: 0.9375rem;
      margin-top: 1.75rem;
      .options {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        .optionsWrapper {
          display: flex;
          align-items: center;
          column-gap: 0.75rem;
          span {
            display: inline-block;
            font-family: var(--font-1);
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
            color: var(--color-black);
          }
        }
      }
    }
  }

  &.slideLogo {
    width: 100%;
    margin: 0 auto;
    padding: 0 2.8125rem;
    .logoSlide {
      padding-top: 5rem;
    }
    .partnersLogo {
      width: auto;
      text-align: center;
    }
  }

  &.doesWork {
    position: relative;
    padding: 0 20px;
    .info {
      max-width: 65.625rem;
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 6.5rem;
      .blackWhite {
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--color-black);
      }
      .title {
        padding-top: 4rem;
        span {
          font-family: var(--font-2);
          font-style: normal;
          font-weight: 700;
          font-size: 3.375rem;
          line-height: 3.125rem;
        }
      }
      .desc {
        padding-top: 3rem;
        max-width: 46.125rem;
      }
    }
    .visual {
      max-width: 65.625rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding-top: 12.75rem;
      position: relative;
      .wrapperImg {
        display: flex;
        position: relative;
        max-width: 15.4375rem;
        width: 100%;
        max-height: 14.875rem;
        height: 100%;
        bottom: 2.8125rem;
        img {
          box-shadow: 0rem 0rem 1.5rem var(--color-purple);
          border-radius: 1rem;
        }
        .img1 {
          position: absolute;
          top: 5.625rem;
          right: 0;
          z-index: 2;
        }

        .img2 {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
      }
    }
    .started {
      max-width: 65.625rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 9.25rem;
      .btnArrow {
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
        color: var(--color-white);
      }
    }
  }

  &.demo {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0px 80px;
    margin-top: 4.5rem;
    text-align: center;
    .info {
      .title {
        span {
          font-family: var(--font-2);
          font-style: normal;
          font-weight: 700;
          font-size: 3.375rem;
          line-height: 3.125rem;
        }
      }
      .desc {
        padding-top: 1rem;
      }
    }
    .cardsDemoWrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 48px;
      margin-top: 72px;
      background: url(${groupCapsule});
      background-position: center 25%;
      background-repeat: no-repeat;
      .infoCard {
        h3 {
          font-family: var(--font-2);
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 37px;
          color: var(--color-white);
          padding-bottom: 20px;
          border-bottom: 1px solid var(--color-white);
        }
        p {
          padding-top: 20px;
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 150%;
          color: var(--color-white);
        }
        .btnBlackArrow {
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          color: var(--color-white);
        }
      }
      .cardsDemo {
        max-width: 600px;
        width: 100%;
        border-radius: 32px;
        &.cardsDemoLyricsPromo {
          background: linear-gradient(180deg, #5170ff -10.13%, #ff66c4 121.32%);
          .imgWrappers {
            max-width: 532px;
            height: 300px;
            width: 100%;
            margin: 0 auto;
            position: relative;
            margin-top: 32px;
            .box {
              position: absolute;
              span {
                position: absolute;
                bottom: 10px;
                left: 5%;
                right: 5%;
                z-index: 3;
                font-family: var(--font-1);
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                text-align: center;
                color: var(--color-white);
              }
            }
            .box:first-child {
              top: 0;
              left: 0;
              z-index: 2;
            }
            .box:last-child {
              top: 63px;
              right: 0;
              z-index: 1;
            }
          }
          .infoCard {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 389px;
            margin: 0 auto;
            padding-bottom: 32px;
            p {
              padding-bottom: 32px;
            }
          }
        }
        &.cardsDemoSpotify {
          background: linear-gradient(90deg, #5170ff 0%, #ff66c4 100%);
          .infoWrapper {
            padding: 57px 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 10px;
          }
          .infoCard {
            max-width: 268px;
            width: 100%;
            text-align: center;

            h3 {
              padding-top: 48px;
              text-align: left;
            }
            p {
              text-align: left;
              padding-bottom: 32px;
            }
          }
        }
        &.cardsDemoVisualizer {
          background: linear-gradient(90deg, #5170ff 0%, #ff66c4 100%);
          .imgWrappers {
            padding: 80px 18px 0 21px;
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .infoCard {
            max-width: 346px;
            margin: 0 auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 95px;
            padding-bottom: 32px;
            p {
              padding-bottom: 32px;
            }
          }
        }
      }
    }
  }

  &.why {
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 150px;
    padding: 0px 80px;
    .info {
      text-align: center;
      max-width: 738px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding-top: 12px;
      .title {
        font-family: var(--font-2);
        font-style: normal;
        font-weight: 700;
        font-size: 54px;
        line-height: 50px;
        padding-top: 72px;
      }
      .blackWhite {
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: var(--color-black);
      }
      .desc {
        padding-top: 16px;
        p {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 150%;
        }
      }
    }
    .cardWrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 60px;
      .card {
        max-width: 379px;
        background: linear-gradient(
          90deg,
          #5170ff 0%,
          #92c3fb 0.01%,
          #8c59fe 100%
        );
        border-radius: 16px;
        &:nth-child(2) {
          background: linear-gradient(
            270deg,
            #5170ff -2.64%,
            #92c3fb -2.63%,
            #8c59fe 106.99%
          );
        }
      }
      .cardInfo {
        padding: 45px 56px;
        text-align: center;
        h3 {
          font-family: var(--font-2);
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 22px;
          color: var(--color-white);
        }
        p {
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: var(--color-white);
          padding-top: 16px;
        }
      }
    }
  }
`;

export const ImgText = styled.div`
  position: relative;
  &.promo {
    .text {
      position: absolute;
      width: 100%;
      max-width: 26.6875rem;
      margin-left: 2.125rem;
      bottom: 3.375rem;
      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 1.875rem;
        line-height: 2.25rem;
        color: var(--color-white);
      }
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 150%;
        margin-top: 1rem;
        color: var(--color-white);
      }
    }
  }
  &.options {
    .text {
      position: absolute;
      width: 100%;
      max-width: 24.0625rem;
      margin-left: 0.875rem;
      bottom: 3.125rem;
      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 1.875rem;
        line-height: 2.25rem;
        color: var(--color-white);
      }
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 150%;
        margin-top: 1rem;
        color: var(--color-white);
      }
    }
  }
`;
