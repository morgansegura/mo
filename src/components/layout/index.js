import React, { useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import { HeaderContainer } from "../../containers/header"
import { FooterContainer } from "../../containers/footer"
import { MenuContainer } from "../../containers/menu"

import GlobalStyles from "../../../global-styles"
import { useDarkMode } from "../theme/useDarkMode"
import {
    lightTheme,
    darkTheme,
    alt1Theme,
    alt2Theme,
} from "../theme/themeStyles"
import ToggleTheme from "../theme/toggleTheme"

import * as S from "./styles/layout"

const Layout = ({ children, location }) => {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    // useState Hook
    const [toggleNav, setToggleNav] = useState(false)

    // Toggle Theme Colors Mode
    const [theme, toggleTheme, componentMounted] = useDarkMode()
    const themeMode =
        theme === "light"
            ? lightTheme
            : theme === "dark"
            ? darkTheme
            : theme === "alt1"
            ? alt1Theme
            : theme === "alt2"
            ? alt2Theme
            : darkTheme

    if (!componentMounted) {
        return <div />
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <div className="wrapper relative flex flex-col h-screen">
                <HeaderContainer
                    className={`h-16 lg:h-24 lg:ml-48 fixed z-10 px-10 flex items-center justify-between ${
                        toggleNav ? "drawer-open" : ""
                    }`}
                >
                    <S.MainNavToggle
                        className="flex"
                        onClick={() => setToggleNav(!toggleNav)}
                    >
                        <S.Hamburger className="hamburger">
                            <div className="hamburger__center" />
                        </S.Hamburger>
                    </S.MainNavToggle>
                    <ToggleTheme theme={theme} toggleTheme={toggleTheme} />

                    <MenuContainer
                        className={`
                        fixed font-sans font-semibold z-10 inset-0 flex items-center flex-col w-24 shadow-lg lg:shadow-none transform transition-translate ease-out duration-300
                        ${
                            toggleNav
                                ? `translate-x-0`
                                : `-translate-x-full lg:translate-x-0`
                        }
                    `}
                    ></MenuContainer>
                </HeaderContainer>
                <S.Content className="content flex-1 lg:pt-24 ml-0 lg:ml-48">
                    {children}
                    <FooterContainer>
                        Morgan Segura | {new Date().getFullYear()}
                    </FooterContainer>
                </S.Content>
            </div>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
