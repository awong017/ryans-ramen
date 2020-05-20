import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';
import Nav from './nav';

const AboutDiv = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    h1 {
        margin-top: 48px;
        text-align: center;
    }
`

const About = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <AboutDiv>
                <Nav />
                <h1>About Component</h1>
            </AboutDiv>
        </ThemeProvider>
    )
}

export default About;
