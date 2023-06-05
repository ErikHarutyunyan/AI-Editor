import styled, { createGlobalStyle } from "styled-components";

export const Shape = styled.div`
  position: ${(props) => props?.position};
  top: ${(props) => props?.top};
  left: ${(props) => props?.left};
  right: ${(props) => props?.right};
  bottom: ${(props) => props?.bottom};
  z-index: ${(props) => props?.zIndex};
`;

export const AnimationUpDown = styled.div`
  animation: mover ${(props) => props?.second} infinite alternate;
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(${(props) => props?.down});
    }
  }
`;

export const MaxContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-drWhite: #fafafa;
    --color-black: #000000;
    --color-lacquer: #3e3e3e;
    --color-purple: #8C52FF;
    --color-lavender: #F6BCFF;
    --color-lovely: #FEF1FD;
    --color-patriarch: #830076;
    --color-pink: #D6BBFB;
    --color-delight: #fdeeff99;
    --color-flintstone: #667085;
    --color-orochimaru: #D9D9D9;
    --color-eggplant: #320434;
    --color-delighted: #2B192F;
    --fz-14: 14px;
    --lh-24: 24px;
    --font-1: 'Poppins', sans-serif;
    --font-2: 'League Spartan', sans-serif;
  }
  
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
    font-size: 16px;
    font-family: var(--font-1);
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
    display: inline-block;
    all: unset;
    text-decoration: none;
    cursor: pointer;
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

  #root{
    width: 100%;
    height: 100%;
  }

  /* main{
    width: 100%;
    height: 100%;
  } */

 .slick-arrow:before{
    content: none;
  }

  
  .cB{
    color: var(--color-black);
  }

  .cP{
    color: var(--color-purple);
  }
  .cW {
    color: var(--color-white)
  }
`;
