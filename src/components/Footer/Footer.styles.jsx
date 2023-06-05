import styled from "styled-components";

export const FooterWrapper = styled.footer``;

export const Wrapper = styled.div`
  padding: 48px 80px 32px 80px;
  display: flex;
  justify-content: space-between;
  a {
    display: block;
  }
  .title {
    margin-top: 16px;
    span {
      font-family: var(--font-2);
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 33px;
    }
  }
  .menu {
    display: flex;
    column-gap: 100px;
  }

  .titleMenu {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    color: #000000;
  }
  .links {
    nav {
      margin-top: 16px;
      ul {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        li {
          a {
            font-family: var(--font-1);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: var(--color-black);
          }
        }
      }
    }
  }
  .contact {
    p {
      margin-top: 16px;
      font-family: var(--font-1);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-black);
    }
  }
`;
