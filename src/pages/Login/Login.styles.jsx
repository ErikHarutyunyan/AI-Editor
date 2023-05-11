import styled from "styled-components";

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
    max-width: 320px;
    width: 100%;
    z-index: 1;
    padding: 0 20px;
    .form {
      &Title {
        h2 {
          font-family: var(--font-2);
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 38px;
          color: #7f188f;
          text-align: center;
        }

        margin-bottom: 60px;
      }

      &Group:not(:first-child) {
        margin-top: 8px;
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
