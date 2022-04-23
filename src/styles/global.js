import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --cor001: rgb(245, 245, 245);
        --cor002: rgb(228, 236, 240);
        --cor003: #DAE0E3;
        --cor004: white;
        --cor005: #F5F5F5;
        --cor006: #EEF2F4;
        
        --cor007: rgb(186, 195, 201);
        --cor008: #707B81;
        --cor009: gray;

        --cor010: #4C309B;
        --cor011: #5D41AC;
    }

    *{
        margin: 0;
        padding: 0;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background: var(--cor001);
    }

    
    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
`