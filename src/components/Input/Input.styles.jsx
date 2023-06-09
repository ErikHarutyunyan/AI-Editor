import styled from "styled-components";

export const DefaultWrapper = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-bottom: 1px solid #717171;
    padding-bottom: 16px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    &::placeholder {
      color: #717171;
    }
  }
`;
export const CheckWrapper = styled.div`
  label {
    display: flex;
    align-items: center;
    font-family: var(--font-1);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    margin-bottom: 8px;
    color: #667085;
  }

  input {
    appearance: none;
    width: 16px;
    height: 16px;
    background: #ffffff;
    border: 1px solid #f6bcff;
    border-radius: 4px;
    margin-right: 8px;
    position: relative;
    cursor: pointer;

    &:checked::before {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;
      color: #7f188f;
      font-weight: bold;
    }
  }
`;
