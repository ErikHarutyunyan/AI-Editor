import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
    font-size: 100%;
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
  }
`;
