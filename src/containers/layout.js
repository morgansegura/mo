import React, { useState } from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import { HeaderContainer } from "./header"
import { FooterContainer } from "./footer"
import { MenuNavigationContainer } from "./menu-navigation"

import Layout from "../components/layout"
import Hamburger from "../components/hamburger"

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

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Layout className="wrapper relative flex flex-col h-screen">
                <HeaderContainer
                    className={`fixed z-10 px-10 flex items-center justify-between ${
                        toggleNav ? "nav-drawer-open" : ""
                    }`}
                >
                    <Hamburger
                        className="flex"
                        onClick={() => setToggleNav(!toggleNav)}
                    />
                    <ToggleTheme theme={theme} toggleTheme={toggleTheme} />

                    <MenuNavigationContainer
                        className={`nav-menu font-sans font-semibold z-10 inset-0 flex items-center flex-col min-h-device shadow-lg lg:shadow-none`}
                    ></MenuNavigationContainer>
                </HeaderContainer>
                <Layout.Container className="content flex-1">
                    {children}
                    <FooterContainer>
                        Morgan Segura | {new Date().getFullYear()}
                    </FooterContainer>
                </Layout.Container>
            </Layout>
        </ThemeProvider>
    )
}
