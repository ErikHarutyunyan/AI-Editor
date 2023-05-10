import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  text-align: ${(props) => props?.align};
  .btnPurple {
    max-width: ${(props) => props?.mW};
    width: 100%;
    background: #7f188f;
    border: 1px solid #7f188f;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    padding: 10px 0px;
    margin: 0 auto;
  }

  .btnWhite {
    max-width: ${(props) => props?.mW};
    width: 100%;
    padding: 10px 0;
    background: #ffffff;
    border: 1px solid #f6bcff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #344054;
  }
`;
