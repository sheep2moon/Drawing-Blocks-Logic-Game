import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Game from "./components/Game.jsx";
import { theme } from "./theme.js";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <Game />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primaryDark};
`;
