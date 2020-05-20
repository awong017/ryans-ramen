import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';

const CollectionItemDiv = Styled.div`
    margin-top: 48px;

    ul {
        padding-left: 0px;
        list-style: none;
    }
`
const CollectionItem = ({ name, location }) => {
    const { collection } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <CollectionItemDiv>
                <ul>
                    <li>{name}</li>
                    <li>{location}</li>
                </ul>
            </CollectionItemDiv>
        </ThemeProvider>
    )
}

export default CollectionItem;