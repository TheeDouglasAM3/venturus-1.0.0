import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    overflow-x: hidden;
  }

  hr {
    background-color: #F2F2F2; 
    height: 0.16rem; 
    border: 0; 
  }
  
  body {
    color: #0A0A0A;
    background: #F2F2F2;
    position: relative
  }

  body, input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  a { 
    text-decoration: none;
  }

  ul {
    list-style:none;
  }

  ul, li {
      margin: 0;
      padding: 0;
  }
`
