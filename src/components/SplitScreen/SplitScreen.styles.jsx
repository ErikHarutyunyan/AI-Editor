import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => props?.h};
`;

export const LeftSection = styled.div`
  flex: ${(props) => props?.flexWidth};
`;
export const RightSection = styled.div`
  flex: ${(props) => props?.flexWidth};
`;
