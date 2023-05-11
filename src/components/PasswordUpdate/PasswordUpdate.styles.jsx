import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  max-width: 273px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 1;
  h2 {
    font-family: var(--font-2);
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #7f188f;
    margin-top: 64px;
  }
  h3 {
    font-family: var(--font-1);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    color: #667085;
    margin-top: 8px;
  }
  button.btnPurple {
    margin-top: 64px;
  }
`;
