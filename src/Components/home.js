import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';
import Nav from './nav';
import Collection from './collection';

const HomeDiv = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const Home = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <HomeDiv>
                <Nav />
                <Collection />
            </HomeDiv>
        </ThemeProvider>
    )
}

export default Home;