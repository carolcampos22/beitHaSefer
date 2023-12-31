import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before 
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Sometype mono";
    }
`;
export default GlobalStyle;
