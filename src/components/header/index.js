import React from "react"

import { Wrapper, Container, LogoContainer, Navbar } from "./styles/header"

export default function Header({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Header.LogoContainer = function HeaderLogoContainer({
    to,
    children,
    ...restProps
}) {
    return <LogoContainer {...restProps}>{children}</LogoContainer>
}
Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
    return <Navbar {...restProps}>{children}</Navbar>
}
