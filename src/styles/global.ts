import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  :root {
    --color-primary: #a855f7;
    --color-primary-dark: #9333ea;

    --color-bg-light: #FAFAFA;
    --color-bg-medium: #F6F6F6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-height: 100%;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;