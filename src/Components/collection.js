import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';

const Collection = Styled.div`
    text-align: center;
`

const collection = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Collection>
                <h2>Collection Component</h2>
            </Collection>
        </ThemeProvider>
    )
}

export default collection;