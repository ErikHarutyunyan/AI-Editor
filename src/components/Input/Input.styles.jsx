import styled from "styled-components";

export const DefaultWrapper = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: var(--color-white);
    border: 1px solid var(--color-lavender);
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
    gap: 8px;
    color: var(--color-flintstone);

    &::placeholder {
      color: var(--color-flintstone);
    }
  }
`;
export const CheckWrapper = styled.div`
  label {
    display: flex;
    align-items: center;
    font-family: "Outfit", serif;
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
