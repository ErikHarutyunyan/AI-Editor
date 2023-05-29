import styled from "styled-components";
export const Wrapper = styled.div`
  text-align: ${(props) => props?.align};
  max-width: ${(props) => props?.mW};
  width: 100%;
  a {
    display: inline-block;
    width: 100%;
  }
  .blackWhite {
    width: 100%;
    border: 1px solid var(--color-black);
    border-radius: 360px;
    background: var(--color-white);
    padding: ${(props) => (props?.paddings ? props.paddings : "12px 0px")};
    transition: all 0.3s ease;
  }
  .btnPurple {
    width: 100%;
    background: var(--color-purple);
    border: 1px solid var(--color-purple);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: ${(props) => (props?.paddings ? props.paddings : "12px 0px")};
    margin: 0 auto;
    border-radius: 360px;
    transition: all 0.3s ease;
  }

  .btnArrow {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 12px;
    gap: 10px;
    border-radius: 360px;
    color: var(--color-white);
    & > :first-child {
      margin-left: auto;
    }
    & > :last-child {
      margin-left: auto;
    }
  }

  .btnPurpleArrow {
    background: var(--color-purple);
  }

  .btnBlackArrow {
    background: var(--color-black);
  }
`;
