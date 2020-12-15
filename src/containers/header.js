import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MoreIcon, Header } from "../components"
import { MenuContainer } from "./menu"

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

    const [toggleAuthor, setToggleAuthor] = useState(false)

    return (
        <Header className={`header ${className}`} onScroll={handleScroll}>
            <Header.Container className="flex w-full items-center">
                <Header.LogoContainer
                    className={`flex items-center transition ease-out duration-150 ${
                        toggleAuthor ? "author-drawer-open" : ""
                    }`}
                >
                    <MoreIcon
                        className="toggle-author"
                        onClick={() => setToggleAuthor(!toggleAuthor)}
                    />
                    <Link to="/" title="Home" aria-label="Home">
                        <LogoImage className="logo" />
                    </Link>
                    <MenuContainer
                        className={`author-menu font-sans font-semibold flex items-center flex-col min-h-device shadow-lg lg:shadow-none`}
                    ></MenuContainer>
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
