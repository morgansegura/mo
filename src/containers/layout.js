import React, { useState } from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import { HeaderContainer } from "./header"
import { FooterContainer } from "./footer"
import { MenuContainer } from "./menu"

import Layout from "../components/layout"
import Hamburger from "../components/hamburger"

import GlobalStyles from "../../global-styles"
import { useDarkMode } from "../components/theme/useDarkMode"
import {
    lightTheme,
    darkTheme,
    alt1Theme,
    alt2Theme,
} from "../components/theme/themeStyles"
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
            <Layout className="wrapper relative flex flex-col h-screen">
                <HeaderContainer
                    className={`h-16 lg:h-20 fixed z-10 px-10 flex items-center justify-between ${
                        toggleNav ? "drawer-open" : ""
                    }`}
                >
                    <Hamburger
                        className="flex"
                        onClick={() => setToggleNav(!toggleNav)}
                    />
                    <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
                    <MenuContainer
                        className={`
                        fixed font-sans font-semibold z-10 inset-0 flex items-center flex-col w-24 min-h-device shadow-lg lg:shadow-none transform transition-translate ease-out duration-300
                        ${
                            toggleNav
                                ? `translate-x-0`
                                : `-translate-x-full lg:translate-x-0`
                        }
                    `}
                    ></MenuContainer>
                </HeaderContainer>
                <Layout.Container className="content flex-1 lg:pt-20 ml-0 lg:ml-20">
                    {children}
                    <FooterContainer>
                        Morgan Segura | {new Date().getFullYear()}
                    </FooterContainer>
                </Layout.Container>
            </Layout>
        </ThemeProvider>
    )
}
