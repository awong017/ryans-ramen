import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/globalStyles';
import Context from './context';

const Home = Styled.div`
    text-align: center;
    color: ${(props) => props.theme.bodyColor};
`

const home = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Home>
                <h1>Ryan's Ramen</h1>
            </Home>
        </ThemeProvider>
    )
}

export default home;