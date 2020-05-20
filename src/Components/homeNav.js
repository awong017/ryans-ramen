import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const HomeNav = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    ul {
        display: grid;
        grid-template-columns: 45% 10% 45%;
        list-style: none;
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        padding-left: 0;

        .about-link {
            margin-left: auto;
            margin-right: 10px;
        }

        .link-separator {
            margin-left: auto;
            margin-right: auto;
        }

        .collection-link {
            margin-left: 10px;
        }
    }
`

const homeNav = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <HomeNav>
                <ul>
                    <li className="about-link">about</li>
                    <li className="link-separator">|</li>
                    <li className="collection-link">collection</li>
                </ul>
            </HomeNav>
        </ThemeProvider>
    )
}

export default homeNav;