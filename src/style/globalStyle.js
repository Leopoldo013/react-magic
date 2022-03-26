import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #F3C5C5;
    font-family: 'Quicksand', sans-serif;
    font-family: 'Ubuntu', sans-serif;
}
html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

`