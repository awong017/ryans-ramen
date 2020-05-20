import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import Context from '../context';
import CollectionItem from './collectionItem';

const CollectionDiv = Styled.div`
    margin-top: 48px;
    text-align: center;
`

const Collection = () => {
    const { collection } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <CollectionDiv>
                <h1>Collection Component</h1>
                {collection.map(item =>
                    <CollectionItem
                        key={item.id} 
                        name={item.name}
                        location={item.location}
                    /> 
                )} 
            </CollectionDiv>
        </ThemeProvider>
    )
}

export default Collection;