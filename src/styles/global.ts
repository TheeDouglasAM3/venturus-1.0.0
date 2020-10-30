import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: #0A0A0A;
    background: #F2F2F2;
  }

  body, input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  a { 
    text-decoration: none;
  }
`
