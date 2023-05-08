import styled from "styled-components";

export const ImgWrapper = styled.img.attrs((props) => ({
  src: props?.src,
  alt: props?.alt,
  width: props?.width ? props.width : "auto",
  height: props?.height ? props.height : "auto",
}))`
  object-fit: ${(props) => props?.objectFit};
`;
