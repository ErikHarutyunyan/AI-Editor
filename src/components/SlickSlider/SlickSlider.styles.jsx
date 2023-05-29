import styled from "styled-components";
export const Wrapper = styled.div``;

export const PartnerLogo = styled.a`
  display: flex !important;
  justify-content: center;
  align-items: center;
  background: var(--color-eggplant);
  height: 180px;
  &-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LogoNextArrowWrapper = styled.div`
  width: 35px;
  height: 35px;
  svg {
    width: 100%;
    height: 100%;
    fill: var(--color-purple);
  }
`;
export const LogoPrevArrowWrapper = styled.div`
  width: 35px;
  height: 35px;
  fill: var(--color-purple);
  svg {
    width: 100%;
    height: 100%;
  }
`;
