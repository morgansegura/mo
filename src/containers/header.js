import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Header } from "../components"

import LogoImage from "../assets/images/segura-icon.svg"

export function HeaderContainer({ className, children }) {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    function handleScroll(e) {
        let element = e.target
        const header = element.querySelector(".header")

        if (window.scrollY > header.clientHeight) {
            header.classList.add("scrolled-header")
        } else {
            header.classList.remove("scrolled-header")
        }
    }

    return (
        <Header className={`header ${className}`} onScroll={handleScroll}>
            <Header.Container className="flex w-full items-center">
                <Header.LogoContainer
                    className="flex items-center w-48 lg:hidden transition ease-out duration-150"
                    to="/"
                    title="Home"
                    aria-label="Home"
                >
                    <LogoImage className="logo w-12 h-12 lg:mx-auto" />
                </Header.LogoContainer>
                <Header.Navbar className="flex-1 flex justify-end items-center">
                    {children}
                </Header.Navbar>
            </Header.Container>
        </Header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}
