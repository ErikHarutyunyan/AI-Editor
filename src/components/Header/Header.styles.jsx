import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: var(--color-white);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0rem 5rem 0rem 5rem;
  .menu {
    display: flex;
    align-items: center;
    column-gap: 7.6875rem;
    .buttonsContainer {
      display: flex;
      column-gap: 0.75rem;
      max-width: 20.75rem;
      .blackWhite {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--color-black);
      }
      .btnPurple {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--color-white);
      }
    }
  }
  .logo {
    max-width: 12.75rem;
    max-height: 6.5rem;
    width: 100%;
    height: 100%;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
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
  column-gap: 2.25rem;
  &.subMenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-drWhite);
    width: 16rem;
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    li {
      padding: 0.3125rem 0;
      cursor: pointer;
      a {
        padding-left: 3rem;
        white-space: nowrap;
        &:hover {
          font-weight: 600;
          border-bottom: 0;
        }
      }
    }
  }
`;

export const NavItem = styled.li`
  position: relative;
  &.menu {
    &:hover {
      ul {
        display: block;
      }
    }
    a {
      font-family: var(--font-1);
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.6875rem;
      color: var(--color-black);
      border-bottom: 0.0625rem solid transparent;
      transition: all 0.3s ease;
      padding: 0.3125rem 0rem;
      &:hover {
        color: var(--color-purple);
        border-bottom: 0.0625rem solid var(--color-purple);
      }
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
  padding: 0.625rem;
`;
