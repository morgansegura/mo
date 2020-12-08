import React from "react"
import { Wrapper, Container } from "./styles/footer"

export default function Footer({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Footer.Container = function FooterContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
