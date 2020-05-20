import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';
import HomeNav from './homeNav';
import Collection from './collection';

const Home = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    h1 {
        text-align: center;
    }
`

const home = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Home>
                <HomeNav />
                <h1>Ryan's Ramen</h1>
                <Collection />
            </Home>
        </ThemeProvider>
    )
}

export default home;