import React from 'react';
import { Link } from 'react-router-dom';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const Nav = Styled.div`
    margin-top: 48px;
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
            margin-right: 8px;
        }

        .link-separator {
            margin-left: auto;
            margin-right: auto;
        }

        .collection-link {
            margin-left: 8px;
        }

        a {
            color: #AAAAAA;
            text-decoration: none;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`

const nav = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Nav>
                <ul>
                    <li className="about-link">
                        <Link to={"/about"}>
                            about
                        </Link>
                    </li>
                    <li className="link-separator">|</li>
                    <li className="collection-link">
                        <Link to={"/"}>
                            collection
                        </Link>
                    </li>
                </ul>
            </Nav>
        </ThemeProvider>
    )
}

export default nav;