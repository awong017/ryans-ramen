import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';
import CollectionItem from './collectionItem';

const Collection = Styled.div`
    margin-top: 48px;
    text-align: center;
`

const collection = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Collection>
                <h1>Collection Component</h1>
                <CollectionItem />
            </Collection>
        </ThemeProvider>
    )
}

export default collection;