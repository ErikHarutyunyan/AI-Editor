import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .formWrapper {
    width: 100%;
    max-width: 515px;
    margin: auto;
    background: linear-gradient(269.73deg, #0e0916 -26.78%, #382553 100.69%);
    border-radius: 48px;
  }
  form {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 1;
    padding: 48px 32px;
    .form {
      &Title {
        text-align: center;
        h2 {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 60px;
          letter-spacing: 0.02em;
          color: #ffffff;
        }

        margin-bottom: 48px;
      }
      &Group:not(:nth-child(2)) {
        margin-top: 32px;
      }
      &Group {
        input {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 12px 10px;
          gap: 10px;
          background: #ffffff;
          border-radius: 8px;
          flex: none;
          flex-grow: 0;
          margin-top: 12px;
        }
        label {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          display: flex;
          align-items: center;
          letter-spacing: 0.04em;
          color: #ffffff;
        }

        &.remember {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          input {
            width: 20px;
            height: 20px;
            background: none !important;
            padding: 0px;
            border: 1px solid #ffffff;
            border-radius: 4px;
            margin: 0;
            margin-right: 10px;
          }
        }
      }

      &Footer {
        margin-top: 64px;
        button {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
        }
      }

      &Ask {
        margin-top: 32px;
        text-align: center;

        p {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
        }
        .logSocial {
          margin-top: 32px;
          display: flex;
          column-gap: 52px;
          justify-content: center;
          button:hover {
            transform: scale(1.1);
            transition: all 0.3s;
          }
        }
      }

      &Forgot {
        a {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          text-decoration-line: underline;
          color: #ffffff;
        }
      }
    }
  }
`;
