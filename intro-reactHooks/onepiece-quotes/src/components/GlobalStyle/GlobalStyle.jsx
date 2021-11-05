import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.png'

export const GlobalStyle = createGlobalStyle`
    body {
        background: url(${bgImg}) center no-repeat;
        background-size: cover;
        margin: 0;
        padding: 0;
        font-family: 'Graduate', cursive;
        color: #322c36;
    }
`;