import styled from "styled-components";

export const DefaultWrapper = styled.div`
  width: 100%;
  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid #f6bcff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
    gap: 8px;
    color: #667085;
    &::placeholder {
      color: #667085ab;
    }
  }
`;
