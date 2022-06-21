import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  .mymodal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    outline: none;
    padding: 20px;
  }

  .myoverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

`

export default GlobalStyles
