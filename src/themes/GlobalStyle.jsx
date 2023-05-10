import styled, {createGlobalStyle} from "styled-components";

export const Shape = styled.div`
  position: ${(props) => props?.position};
  top: ${(props) => props?.top};
  left: ${(props) => props?.left};
  right: ${(props) => props?.right};
  bottom: ${(props) => props?.bottom};
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  :active,
  :focus {
    outline: 0;
  }

  a:active,
  a:focus {
    outline: 0;
  }

  aside,
  footer,
  header,
  nav {
    display: block;
  }

  body,
  html {
    height: 100%;
    width: 100%;
    line-height: 1;
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    box-sizing: border-box;
  }

  :root {
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-purple: #7F188F;
    --color-lavender: #F6BCFF;
    --color-pink: #D6BBFB;
    --color-delight: rgba(253, 238, 255, 0.6);
    --color-flintstone: #667085;
    --fz-14: 14px;
    --lh-24: 24px;
    --fs-Outfit: 'Outfit', serif;
  }
`;
