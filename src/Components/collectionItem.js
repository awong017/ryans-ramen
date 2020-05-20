import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';

const CollectionItem = Styled.div`
    h2 {
        text-align: center;
    }
`
const collectionItem = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <CollectionItem>
                <h2>Collection Item Component</h2>
            </CollectionItem>
        </ThemeProvider>
    )
}

export default collectionItem;