import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: calc(1vw + 0.5em);
    }
    *,
    *::before,
    *::after {
    box-sizing: inherit;
    }
    body {}
    `

    export default GlobalStyle;