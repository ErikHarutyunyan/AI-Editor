import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 405px;
  width: 100%;
  background: linear-gradient(90deg, #0e0916 -23.33%, #2a1a41 117.79%);
  border-radius: 32px;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 0px;
    border-bottom: 4px solid var(--color-white);
    column-gap: 5px;
    span {
      font-family: var(--font-2);
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 26px;
      color: var(--color-white);
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 32px;
    padding-bottom: 32px;
    .prices {
      padding-top: 32px;
      position: relative;
      padding-top: 32px;
      position: relative;
      display: flex;
      align-items: center;
      column-gap: 16px;
      .d {
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 150%;
        color: var(--color-white);
        align-self: baseline;
      }
      h3 {
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 400;
        font-size: 64px;
        line-height: 150%;
        color: var(--color-white);
      }
      span {
        font-family: var(--font-1);
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 150%;
        text-decoration-line: line-through;
        color: var(--color-white);
      }
    }
    .perCredit {
      p,
      span {
        font-family: var(--font-2);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 18px;
        color: var(--color-white);
      }
      span {
        margin: 0 5px;
      }
    }
  }
  
`;
