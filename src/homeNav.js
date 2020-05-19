import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/globalStyles';

const HomeNav = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const homeNav = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <HomeNav>
                <h2>Home Nav Component</h2>
            </HomeNav>
        </ThemeProvider>
    )
}

export default homeNav;