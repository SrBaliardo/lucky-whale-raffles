import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    list-style: none;
    font-family: 'Roboto', sans-serif;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  a {
    cursor: pointer;
    &:hover {
    color: #ccff33;
  }
  }

  button {
    cursor: pointer;
    transition: all .2 ease;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(.98);
    opacity: .9;
  }
  }

  input, textarea, button, a, ul, li {
    font-family: 'Roboto', sans-serif;
  }

  span {
    color: #ccff33;
  }
  `

export default GlobalStyles
