import React from "react"

import { Wrapper, Container } from "./styles/layout"

export default function Layout({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Layout.Container = function LayoutContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
