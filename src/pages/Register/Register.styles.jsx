import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-white);

  .leftWrapper {
    padding: 156px 76px 145px 48px;
    height: 100%;
    background: linear-gradient(269.73deg, #0e0916 -26.78%, #382553 100.69%);
    border-radius: 0px 48px 48px 0px;
    .leftContent {
      max-width: 596px;
      margin: 0 auto;
    }
    .title {
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 700;
      font-size: 54px;
      line-height: 50px;
      color: #ffffff;
    }
    .sbuTitle {
      padding-top: 64px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: #ffffff;
    }
    .options {
      padding-top: 64px;
      display: flex;
      flex-direction: column;
      row-gap: 24px;
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
          color: var(--color-white);
        }
      }
    }
    .imgsWrapper {
      display: flex;
      margin-top: 56px;
      img {
        border-radius: 8px;
      }
    }
  }

  .regSocial {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    margin-top: 32px;
    .btnSocial {
      background: none;
      display: flex;
      align-items: center;
      padding: 10px 16px;
      gap: 10px;
      max-width: 280px;
      width: 100%;
      border: 1px solid #bdb7c2;
      border-radius: 4px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: #000000;
    }
  }
  .or {
    max-width: 90px;
    margin: 0 auto;
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    .line {
      width: 24px;
      height: 1px;
      background: #717171;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      display: flex;
      align-items: center;
      letter-spacing: 0.04em;
      color: #717171;
    }
  }
  form {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 1;
    padding: 0 48px;
    .form {
      &Title {
        text-align: left;
        h2 {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 60px;
          letter-spacing: 0.02em;
          color: #000000;
        }
      }
      &Wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 48px;
        justify-content: space-between;
        margin-top: 83px;
        @media ${device.mobileL} {
          gap: 0px;
          row-gap: 20px;
          margin-top: 45px;
        }
      }
      &Group {
        flex-basis: 100%;
      }
      &Footer {
        margin-top: 64px;
        button {
          width: 100%;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
        }
      }

      &Ask {
        margin-top: 16px;
        text-align: left;

        span {
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 38px;
          color: #667085;
        }

        a {
          color: #d6bbfb;
        }
      }

      &Forgot {
        margin-top: 8px;

        a {
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 38px;
          color: #d6bbfb;
        }
      }
    }
  }
`;
