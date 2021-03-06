import styled, { createGlobalStyle } from 'styled-components';
import font from './fonts/CircularStd-Book.otf';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Circular Std', sans-serif;
    line-height: 160%;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #F83633;
  }
  @font-face {
    font-family: 'Circular Std';
    src: url(${font}) format('truetype');
    font-display: auto;
  }


`;

export const Container = styled.div`
width: 100%;
max-width: 1920px;
margin: 0 auto;
padding-left: 110px;
padding-right: 110px;

@media screen and (max-width: 992px) {
  padding-left: 50px;
  padding-right: 50px;
}
@media screen and (max-width: 599px) {
  padding-left: 30px;
  padding-right: 30px;
}
`;

export default GlobalStyles;