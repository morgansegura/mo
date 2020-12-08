import React from "react"

import { Container, Inner } from "./styles/card"

export default function Card({ children, ...restProps }) {
    return (
        <Container>
            <Inner>{children}</Inner>
        </Container>
    )
}
