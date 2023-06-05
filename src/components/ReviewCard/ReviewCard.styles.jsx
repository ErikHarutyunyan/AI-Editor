import styled from "styled-components";
import { line } from "../Image/Image";
export const Wrapper = styled.div`
  max-width: 406px;
  background: linear-gradient(136.82deg, #8e5bfa 24.13%, #b768fa 101.04%);
  border: 4px solid #000000;
  border-radius: 16px;
  padding: 35px 30px;
  margin: 0 auto;
  .reviewBox {
    background: #ffffff;
    border: 4px solid #000000;
    border-radius: 16px;
    padding: 25px 20px;
    .reviewHeader {
      display: flex;
      column-gap: 20px;
      padding: 10px;
      img {
        max-width: 80px;
        height: 80px;
        border-radius: 360px;
      }
      h3 {
        position: relative;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #000000;
        padding-top: 14px;
        &::after {
          position: absolute;
          content: url(${line});
          top: 40px;
          left: 0;
        }
      }
    }
    .reviewBody {
      padding-top: 16px;
      .message {
        p {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #000000;
        }
      }
    }
    .reviewFooter {
      padding-top: 20px;
    }
  }
`;
