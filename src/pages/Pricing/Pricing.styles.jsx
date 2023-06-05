import styled from "styled-components";

export const PricingWrapper = styled.div`
  .marq {
    margin-top: 150px;
  }
`;

export const Section = styled.section`
  &.pricingBanner {
    position: relative;
    background-color: var(--color-delighted);
    height: 550px;
    .pricingBannerWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 80px;
      .title {
        h1 {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 60px;
          letter-spacing: 0.02em;
          color: var(--color-white);
        }
      }
    }
  }
  &.bannerInfo {
    margin-top: 32px;
    .banner {
      background: linear-gradient(
        90.03deg,
        #1b52b1 -0.81%,
        #7061c9 47.09%,
        #a469d8 100.26%
      );
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 80px;
      .item {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #ffffff;
      }
    }
    .infoIcon {
      max-width: 987px;
      width: 100%;
      display: flex;
      column-gap: 16px;
      margin: 0 auto;
      justify-content: center;
      padding-top: 32px;
      .item {
        display: flex;
        align-items: center;
        column-gap: 16px;
        padding-right: 16px;
        &:not(:last-child) {
          border-right: 2px solid var(--color-orochimaru);
        }
      }
    }
  }
  &.faqs {
    margin-top: 64px;
    .info {
      text-align: center;
      max-width: 800px;
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
    .faqsAccordion {
      margin-top: 72px;
      display: flex;
      flex-direction: column;
      row-gap: 32px;
      .accFaqs {
        border: none;
      }
      .accHeader {
        border: 2px solid #000000;

        border-radius: 360px;
        background-color: var(--color-white);
        padding: 8.5px 0px;
        padding-left: 32px;
        padding-right: 16px;
        .accTitle {
          font-family: var(--font-2);
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 29px;
          color: var(--color-black);
        }
        .accBtn {
          width: 60px;
          height: 60px;
          border: 2px solid #000000;
          border-radius: 360px;
          font-size: 38px;
        }
      }
      .accContent {
        .content {
          border-bottom: 2px solid #000000;
          margin-top: 10px;
        }
      }
    }
    .started {
      max-width: 65.625rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 30px;
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
  &.review {
    margin-top: 150px;
    .reviewSlides {
      margin-bottom: 64px;
    }
    .trustWrapper {
      text-align: center;
    }
  }
  &.slideLogo {
    width: 100%;
    margin: 0 auto;
    padding: 0 45px;
    .title {
      text-align: center;
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 700;
      font-size: 54px;
      line-height: 50px;
      padding-top: 100px;
      .cP {
        text-decoration: underline;
      }
    }
    .logoSlide {
      padding-top: 32px;
    }
    .partnersLogo {
      width: auto;
      text-align: center;
    }
  }
  &.price {
    padding: 0 80px;
    margin-top: -400px;
    .info {
      text-align: center;
      max-width: 738px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding-top: 150px;
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

    .creditCardWrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 72px;
      gap: 64px 32px;
      &.treeColumns {
        position: relative;
        gap: 0;
        column-gap: 15px;
        padding: 0 15px;
        .creditCard {
          /* margin: 0 -30px; */
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          &:hover {
            transform: scale(1.15);
            background: linear-gradient(
              155.64deg,
              #9882d0 -34.62%,
              #3c3165 98.42%
            );
            transition: all 0.5s ease-in-out;
          }
        }
      }
      .creditCard {
        max-width: 405px;
        background: #1c0627;
        border-radius: 32px;

        .creditCardHeader {
          width: 100%;
          padding: 0 32px;
          padding-top: 49px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          .count {
            font-family: var(--font-2);
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 29px;
            color: var(--color-white);
          }
        }
        .creditFooter {
          padding-top: 33px;
          padding-left: 32px;
          .title {
            font-family: var(--font-2);
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 26px;
            color: var(--color-white);
          }
          .options {
            padding-top: 20px;
            padding-bottom: 40px;
            display: flex;
            flex-direction: column;
            row-gap: 16px;
            .option {
              display: flex;
              align-items: center;
              column-gap: 10px;
              span {
                font-family: var(--font-1);
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                color: var(--color-white);
              }
            }
          }
        }
        &-one {
          .creditCardBody {
            padding: 0 32px;
            padding-top: 50px;
          }
        }
        &-two {
          .creditCardBody {
            padding: 0 79px;
            padding-top: 62px;
          }
          .creditFooter {
            padding-top: 53px;
          }
        }
        &-tree {
          .creditCardBody {
            padding: 0 24px;
            padding-top: 18px;
          }
          .creditFooter {
            padding-top: 24px;
          }
        }
      }
    }
  }
`;
