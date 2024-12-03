const { createGlobalStyle, css } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box; 
        margin: 0;
        padding: 0;
    }

    body {
        ${({ theme }) => css`
            background: ${ theme.colors.gradientDefault } no-repeat;
            background-size: cover;
            min-height: 100vh;
            font-family: ${ theme.fonts.family.default };
            font-size: 14px;
        `}
    }

    p {
        ${({ theme }) => css`
            font-family: ${ theme.fonts.family.default };
            font-size: 20px;
        `}
    }

    h1 {
        ${({ theme }) => css`
            font-family: ${ theme.fonts.family.secondary };
            font-size: 30px;
        `}
    }

    h2 {
        ${({ theme }) => css`
            font-family: ${ theme.fonts.family.default };
            font-weight: normal;
        `}
    }

    h3 { 
        ${({ theme }) => css`
            font-family: ${ theme.fonts.family.default };
            font-weight: normal;
        `}
    }

    h4 {
        ${({ theme }) => css`
            font-family: ${ theme.fonts.family.default };
            font-weight: bold;
        `}
    }

    h5 { 
        ${({ theme }) => css`
            font-family: ${ theme.fonts.family.default };
            font-weight: bold;
            font-size: 16px;
        `}
    }

    @media (max-width: 319px) {
        #root {
            min-width: 320px;
        }
    }
`;