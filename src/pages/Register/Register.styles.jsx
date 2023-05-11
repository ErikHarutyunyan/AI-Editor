import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(253, 238, 255, 0.6);

  form {
    position: relative;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    max-width: 660px;
    width: 100%;
    z-index: 1;
    padding: 0 20px;
    .form {
      &Title {
        text-align: center;
        h2 {
          font-family: var(--font-2);
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 38px;
          color: #7f188f;
        }
        h3 {
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 38px;
          color: #3e3e3e;
          margin-top: 9px;
        }
      }
      &Wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
        margin-top: 83px;
        @media ${device.mobileL} {
          gap: 0px;
          row-gap: 20px;
          margin-top: 45px;
        }
      }
      &Group {
        flex-basis: calc(50% - 20px);
        @media ${device.mobileL} {
          flex-basis: 100%;
        }
      }

      &Footer {
        margin-top: 64px;
      }

      &Ask {
        margin-top: 16px;
        text-align: center;

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
