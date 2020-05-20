import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';
import Nav from './nav';

const About = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    h1 {
        text-align: center;
    }
`

const about = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <About>
                <Nav />
                <h1>About Component</h1>
            </About>
        </ThemeProvider>
    )
}

export default about;
