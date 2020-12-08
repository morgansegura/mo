import React from "react"

import { Container, Inner, Middle } from "./styles/hamburger"

export default function Hamburger({ ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner className="hamburger">
                <Middle className="hamburger__center"></Middle>
            </Inner>
        </Container>
    )
}
