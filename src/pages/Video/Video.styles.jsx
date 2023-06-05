import styled from "styled-components";
import { videoBannerBg } from "../../components/Image/Image";

export const VideoWrapper = styled.div`
  position: relative;
  background: #150c17;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 ${(props) => (props?.pLR ? props.pLR : "1.25rem")};
`;

export const Section = styled.section`
  &.banner {
    .split {
      padding-top: 96px;
      align-items: center;
    }
    .videoClipsInfo {
      max-width: 555px;
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 32px;
    }
    .title {
      span,
      p {
        font-family: var(--font-2);
        font-style: normal;
        font-weight: 700;
        font-size: 54px;
        line-height: 50px;
      }
    }
    .custom-input-search {
      position: relative;
      max-width: 496px;
      width: 100%;
      background: var(--color-white);
      display: flex;
      align-items: center;
      border-radius: 360px;
      padding: 13px 18px;
      input[type="text"] {
        width: 100%;
        padding-left: 12px;
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--color-black);
        &::placeholder {
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #b5b5b5;
        }
      }
      .search-icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: #aaa;
        cursor: pointer;
      }
    }
    .trendings {
      display: flex;
      align-items: center;
      column-gap: 16px;
      .name {
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--color-white);
      }
      .trendWrapper {
        display: flex;
        align-items: center;
        column-gap: 12px;
        span {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px 10px;
          gap: 10px;
          width: 108px;
          background: var(--color-white);
          border-radius: 360px;
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          color: var(--color-black);
        }
      }
    }
    .btnsWrapper {
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
      .btnWhite {
        background: var(--color-white);
        color: var(--color-black);
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
      }
    }

    .infoImg {
      background-image: url(${videoBannerBg});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      max-width: 532px;
      padding-top: 110px;
      padding-bottom: 80px;
      margin-left: auto;
      .infoImgWrapper {
      }
    }
    .logoSlide {
      padding-top: 110px;
    }
  }
`;
