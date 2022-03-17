import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
