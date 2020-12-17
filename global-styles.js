import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  /* @import url('https://use.typekit.net/oji6pho.css'); */

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {

  }
  body {
  
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  html, body {
    background-color: ${({ theme }) => theme.bgBody};
  }
  body { 
    position: realtive;
    color: ${({ theme }) => theme.textBody};
    text-size-adjust: 100%;
    font-size: 100%;
    font-family: var(--sans-font);
    font-size: 1rem;
    font-weight: 300;
    font-style: normal;
    line-height: 1.85em;    
    letter-spacing: 0.0125em;
  }
/*
  body::-webkit-scrollbar,
  .sub-author-block::-webkit-scrollbar,
  .layout::-webkit-scrollbar {
    position: absolute;
    z-index: 12;
    width: 0.5rem;
    margin-left: -8px;
    background-color: ${({ theme }) => theme.bgDrawer};    
  }
  
  body::-webkit-scrollbar-track,
  .sub-author-block::-webkit-scrollbar-track,
  .layout::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.2);
  }
  
  body::-webkit-scrollbar-thumb,
  .sub-author-block::-webkit-scrollbar-thumb,
  .layout::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollBar};
    outline: 1px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease-out;
    
    &:hover {
        background-color: ${({ theme }) => theme.scrollBarHover};
    }    
    &:active {
        background-color: ${({ theme }) => theme.scrollBarActive};
    }
  }
  */
  .bg-gradient {
      background: linear-gradient(-45deg, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
      background-size:  400% 400%;
      animation: gradient 20s ease infinite;
  }
  .bg-digital {
    position: relative;
    z-index: 1;

    &:before {
      content: '';
      z-index: 1000;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/src/assets/images/digital.svg');
    }
  }
  .t-base {
      color: ${({ theme }) => theme.textBase};
  }
  .t-offset {
      color: ${({ theme }) => theme.textOffset};
  }
  .t-neutral {
      color: ${({ theme }) => theme.textNeutral};
  }
  .t-accent {
      color: ${({ theme }) => theme.accentColor};
  }  
/* 
#5c5c6f  
#1e1e28
#c0c0ca
#f4f4f6
*/
  :root { 
    /* Light && Dark Theme */
    --gray-50: #fefefe;
    --gray-100: #f0f0f5;    
    --gray-200: #e0e0e6;    
    --gray-300: #d6d6d6;    
    --gray-400: #8c8c8e;    
    --gray-500: #4a4a4a;    
    --gray-600: #3b3b3b;    
    --gray-700: #343434;
    --gray-800: #2e2e2e;    
    --gray-900: #2a2a2a;  
    
    /* Aqua Theme */
    --aqua-100: #7FC0CF;    
    --aqua-200: #6fb5c5;    
    --aqua-300: #5fa3b3;    
    --aqua-400: #2c889e;    
    --aqua-500: #1e6c80;    
    --aqua-600: #0A5A6C;    
    --aqua-700: #024E60;    
    --aqua-800: #02495A;    
    --aqua-900: #013642;     
    
    /* Auburn Theme */
    --orange-100: #fffaf0;    
    --orange-200: #feebc8;    
    --orange-300: #fbd38d;    
    --orange-400: #f6ad55;    
    --orange-500: #ed8936;    
    --orange-600: #dd6b20;    
    --orange-700: #c05621;    
    --orange-800: #9c4221;    
    --orange-900: #7b341e;    

    /* Accents */
    --orange: #ff714a;
    --peach: #ca8165;
    --aqua: ##53c9af;
    --cyan: cyan;
    --magenta: magenta;
    --purple: #805ad5;
    
    /* Remove Below */
    --yellow: #ffb200;
    --accent1: #05f;
    --accent2: cyan;
    --accent3: #16c79b;
    --accent4: #ff714a;

    --headline-font: 'Cairo', sans-serif;
    --sans-font: 'Open Sans', sans-serif;
    --serif-font: 'Roboto Slab', serif;
  }
  
  /* Animations */

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }

`

// Magenta https://www.color-hex.com/color-palette/31535

export default GlobalStyles
