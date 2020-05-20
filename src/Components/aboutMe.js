import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';

const About = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const about = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <About>
                <h2>About Component</h2>
            </About>
        </ThemeProvider>
    )
}

export default about;
