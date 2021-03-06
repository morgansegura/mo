import React, { useState } from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import { HeaderContainer } from "./header"
import { FooterContainer } from "./footer"
import { MenuNavigationContainer } from "./menu-navigation"

import Layout from "../components/layout"
import { Hamburger, MoreIcon } from "../components"

import GlobalStyles from "../../global-styles"
import { useThemeMode } from "../components/theme/useThemeMode"
import {
    lightTheme,
    darkTheme,
    alt1Theme,
    alt2Theme,
} from "../components/theme/styles/themeStyles"
import ToggleTheme from "../components/theme/toggleTheme"

export function LayoutContainer({ children, location }) {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    const [toggleNav, setToggleNav] = useState(false)
    const [toggleAuthor, setToggleAuthor] = useState(false)

    // Toggle Theme Colors Mode
    const [theme, toggleTheme, componentMounted] = useThemeMode()
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

    const handleAuthorNav = event => {
        setToggleAuthor(!toggleAuthor)
        if (toggleNav) {
            setToggleNav(!toggleNav)
        }
    }
    const handleMainNav = event => {
        setToggleNav(!toggleNav)
        if (toggleAuthor) {
            setToggleAuthor(!toggleAuthor)
        }
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Layout className="wrapper relative flex flex-col">
                <HeaderContainer
                    className={`fixed z-10 flex items-center justify-between 
                    ${toggleNav ? "nav-drawer-open" : ""}
                    ${toggleAuthor ? "author-drawer-open" : ""}`}
                >
                    <MoreIcon
                        className="toggle-author"
                        onClick={event => handleAuthorNav(event)}
                    />
                    <div className="nav-box">
                        <Hamburger
                            className="flex"
                            onClick={event => handleMainNav(event)}
                        />
                        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    <MenuNavigationContainer
                        className={`nav-menu font-sans font-semibold z-10 inset-0 flex items-center flex-col min-h-device shadow-xl`}
                    ></MenuNavigationContainer>
                </HeaderContainer>
                <Layout.Container className="layout content">
                    {children}
                    <FooterContainer>
                        Morgan Segura | {new Date().getFullYear()}
                    </FooterContainer>
                </Layout.Container>
            </Layout>
        </ThemeProvider>
    )
}
