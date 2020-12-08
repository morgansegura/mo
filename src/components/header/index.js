// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../../assets/images/segura-icon.svg"
import * as S from "./styles/header"

class Header extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll = e => {
        let element = e.target
        const header = element.querySelector(".header")

        if (window.scrollY > header.clientHeight) {
            header.classList.add("scrolled-header")
        } else {
            header.classList.remove("scrolled-header")
        }
    }
    render() {
        return (
            <S.HeaderWrapper
                className={`header ${this.props.className}`}
                onScroll={this.handleScroll}
            >
                <div className="flex w-full items-center">
                    <S.Logo
                        className="flex items-center w-48 lg:hidden transition ease-out duration-150"
                        to="/"
                        title="Home"
                        aria-label="Home"
                    >
                        <Logo className="logo w-10 h-10 lg:mx-auto" />
                    </S.Logo>
                    <div className="flex-1 flex justify-end items-center">
                        {this.props.children}
                    </div>
                </div>
            </S.HeaderWrapper>
        )
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
