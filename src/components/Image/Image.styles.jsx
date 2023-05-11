import styled from "styled-components";

export const ImgWrapper = styled.img.attrs((props) => ({
  src: props?.src,
  alt: props?.alt,
  width: props?.width ? props.width : "auto",
  height: props?.height ? props.height : "auto",
  loading: props?.loading ? props.loading : "eager",
}))`
  object-fit: ${(props) => props?.objectFit};
  max-width: ${(props) => props?.maxWidth};
  margin: ${(props) => (props?.center ? "0 auto" : "none")};
`;
