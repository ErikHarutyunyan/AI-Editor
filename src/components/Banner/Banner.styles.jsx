import styled from "styled-components";
export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  max-height: ${(props) => props?.h};
  background-image: url(${(props) => props?.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
  }
`;
