import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import reset from 'styled-reset';
export const GlobalStyle = createGlobalStyle`
   ${reset}

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* Font Face */
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Root Variables */
  :root {
    --background-color: #141414;

    /* padding layout */
    --paddingWeb: 0 64px 0 64px;
    --paddingMobile: 16px;


    /* Primary Colors */
    --primary-10: #fef5e6;
    --primary-20: #fef0d9;
    --primary-30: #fce0b1;
    --primary-40: #f59c04; /* main color */
    --primary-50: #dd8c04; /* hover color */
    --primary-60: #c47d03;
    --primary-80: #b87503;
    --primary-90: #935e02;
    --primary-100: #6e4602;
    --primary-110: #563701;

    /* Secondary Colors */
    --secondary-00: #ffffff;
    --secondary-10: #fafafa;
    --secondary-20: #f5f5f5;
    --secondary-30: #ebebeb;
    --secondary-40: #ebebeb;
    --secondary-50: #bfbfbf;
    --secondary-60: #b0b0b0;  
    --secondary-70: #a3a3a3;  
    --secondary-80: #949494;
    --secondary-90: #858585;
    --secondary-100: #757575;
    --secondary-200: #666666;
    --secondary-300: #575757;
    --secondary-400: #4a4a4a;
    --secondary-500: #3b3b3b;
    --secondary-600: #2e2e2e;
    --secondary-700: #1c1c1c;
    --secondary-800: #0d0d0d;
    --secondary-900: #000000;

    /* Button BackgroundColor */
    --btn-play:rgba(219, 219, 219, 0.25);

    /* System Colors */
    --white: #ffffff;
    --black: #000000;
    --red: #ff0000;

    /* Header Font Sizes (base: 15px) */
    --font-header-XXsmall: 15px;
    --font-header-Xsmall: 17px;
    --font-header-Small: 19px;
    --font-header-Medium: 24px;
    --font-header-Large: 32px;
    --font-header-Xlarge: 40px;

    /* Content Font Sizes */
    --font-content-XXsmall: 18px;  /*title*/
    --font-content-Xsmall: 19px;
    --font-content-Small: 22px;
    --font-content-Medium: 24px;
    --font-content-Large: 26px;
    --font-content-Xlarge: 32px;

    /* Body Font Sizes */
    --font-body-Xsmall: 13px;
    --font-body-Small: 15px;
    --font-body-Medium: 17px;
    --font-body-Large: 19px;
    --font-body-Xlarge: 24px;
    --font-body-XXlarge: 61px;
    --font-body-XXXlarge: 80px;
    --font-body-Super: 150px;

    
    /* Display Sizes */
    --font-D-Large: 60px;
    --font-D-Medium: 47px;
    --font-D-Small: 36px;
    
    /* Mobile Font Sizes */
    --font-M-MainHeader: 30px;
    --font-M-Header: 24px;
    --font-M-Small-Header: 19px;
    --font-M-Content-S: 14px;
    --font-M-Content-M: 15px;
    --font-M-Content-L: 17px;
    --font-M-Content-XL: 20px;
    
    /* Web Font Sizes */
    --font-W-MainHeader: 48px;
    --font-W-Header: 24px;
    --font-W-Content-S: 16px;
    --font-W-Content-M: 20px;
    --font-W-Content-L: 24px;
    --font-W-Content-XL: 30px;

    /* Tablet Font Sizes */
    --font-T-MainHeader: 48px;
    --font-T-Header: 24px;
    --font-T-Content-S: 16px;
    --font-T-Content-M: 20px;
    --font-T-Content-L: 24px;
    --font-T-Content-XL: 30px;

    /* Footer Font Sizes */
    --font-footer: 14px;
    --font-T-footer: 12px;

    /* Font Weights */
    --font-weight-ExtraLight: 200;
    --font-weight-Light: 300;
    --font-weight-Regular: 400;
    --font-weight-Medium: 500;
    --font-weight-SemiBold: 600;
    --font-weight-Bold: 700;
    --font-weight-ExtraBold: 800;

    /* Line Heights */
    --line-height-base: 1.2;
  }

  /* Base Styles */
  html {
    font-size: 15px;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'Pretendard-Regular';
    background-color: var(--background-color);
    line-height: 1;
    color: var(--secondary-00);
  }

  /* Reset Styles */
  ol, ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
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

  a {
    text-decoration: none;
    color: inherit;
  }

  button{
      border:none;
      cursor:pointer;
  }

  * {
    box-sizing: border-box;
  }

  /* Swiper Styles */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background: var(--secondary-50);
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: var(--primary-40);
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary-40);
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-50);
    }
  }


  /* Selection Styles */
  ::selection {
    background: var(--primary-40);
    color: var(--secondary-00);
  }

  /* Accessibility Styles */
  :focus-visible {
    outline: 2px solid var(--primary-40);
    outline-offset: 2px;
  }

  [title] {
    position: relative;
    cursor: help;
  }

  /* Utility Classes */
  .main {
    width: 100%;
  }

  .hide {
    overflow: hidden;
    text-indent: -99999px;
    width: 0;
    height: 0;
    font-size: 0;
  }

  /* Responsive Styles */
  @media screen and (min-width: 1025px) {
    /* Desktop styles */
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    /* Tablet styles */
    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    /* Mobile styles */
    html {
      font-size: 13px;
    }
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(—secondary-00);
    transition: color 0.3s ease;

    &:hover {
        color: var(—primary-40);
    }
`;

export default GlobalStyle;
