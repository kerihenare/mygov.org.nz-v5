import { createGlobalStyle } from 'styled-components';

/**
 *
 */
export const GlobalStyle = createGlobalStyle`
  html, body {
    overscroll-behavior: none;
  }

  html {
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.text};
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: 400;
    height: 100%;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: 100%;
  }

  a {
    color: ${(props) => props.theme.link};
    text-decoration: none;
  }

  a:active,
  a:focus,
  a:hover {
    outline: 0 none;
    text-decoration: underline;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  small {
    font-size: 80%;
  }

  strong {
    font-weight: bolder;
  }

  button,
  input,
  select {
    font-family: inherit;
    font-size: 100%;
    line-height: 1;
    margin: 0;
    overflow: visible;
    text-transform: none;
  }

  button {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner  {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
`;
