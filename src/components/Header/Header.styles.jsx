import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: var(--color-white);
  .divider {
    width: 100%;
    height: 9px;
    background: linear-gradient(90.06deg, #840077 -12.25%, #1b0027 136.69%);
  }
`;

export const Wrapper = styled.div`
  max-width: 1760px;
  padding: 24px 80px 18px 80px;
  display: flex;
  justify-content: space-between;
  .menu {
    display: flex;
    align-items: center;
    column-gap: 123px;
    .buttonsContainer {
      display: flex;
      column-gap: 47px;
      a {
        display: inline-block;
        .btnWhite {
          padding: 13px 40px;
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #7f188f;
        }
        .btnPurple {
          padding: 13px 19px;
          font-family: var(--font-1);
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  column-gap: 36px;
`;

export const NavItem = styled.li`
  position: relative;
  &:hover {
    ul {
      display: block;
    }
  }
  a {
    font-family: var(--font-1);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--color-purple);
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    padding: 12px 0px;
    &:hover {
      font-weight: 600;
      border-bottom: 1px solid #7f188f;
    }
  }
`;

export const NavSubLinks = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #333;
  z-index: 1;
`;
export const NavSubLinkItem = styled.li`
  padding: 10px;
`;
