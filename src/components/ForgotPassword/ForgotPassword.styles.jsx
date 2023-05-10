import styled from "styled-components";
import { device } from "../../themes/Breakpoints";
export const Wrapper = styled.div`
  max-width: 660px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  form {
    position: relative;
    margin: auto;
    width: 100%;
    z-index: 1;
    .form {
      &Title {
        text-align: center;
        h2 {
          font-family: "GT Super Ds Trial", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 38px;
          color: #7f188f;
        }
        h3 {
          font-family: "Outfit";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 38px;
          color: #3e3e3e;
          margin-top: 9px;
        }
      }
      &Group {
        max-width: 320px;
        margin: 0 auto;
        margin-top: 64px;
      }

      &Footer {
        margin-top: 64px;
        a {
          display: inline-block;
          width: 100%;
          margin-top: 18px;
        }
      }

      &Ask {
        margin-top: 16px;
        text-align: center;

        span {
          font-family: "Outfit", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 38px;
          color: #667085;
        }

        a {
          display: inline;
          margin-top: 0;
          color: #d6bbfb;
        }
      }
    }
  }
`;
