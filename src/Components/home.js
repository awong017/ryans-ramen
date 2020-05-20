import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';
import Nav from './nav';
import Collection from './collection';

const Home = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const home = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Home>
                <Nav />
                <Collection />
            </Home>
        </ThemeProvider>
    )
}

export default home;