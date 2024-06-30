import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: white;
        --main: rgba(0,0,0,0.7);
        --sub: grey;
        --primary: blue;

        --activity: #ffffa9;
        --train: #cb9fc8;
        --flight: #9edae5;
        --bus: #fdc0a6;
        --walk: #f09eb2;
        --hotel: #bec5e8;
        --drive: #aae9d3;
        --sleep: #ece9e3;
        --food: #fd8089;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 10px;
        font-family: "Roboto", sans-serif;
    }

    div {
        color: var(--main);
    }

    button {
        background: none;
        border: none;
        outline: none;
    }
    
    input {
        border: none;
        outline: none;
        background: none;
        -moz-appearance: textfield;
        appearance: textfield;

        // Remove arrows from number input
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            display: none;
        }
    }

    a {
        text-decoration: none;
    }
`;

const GlobalStyles = (): JSX.Element => {
  return <GlobalStyle />;
};

export default GlobalStyles;
