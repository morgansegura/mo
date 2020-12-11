import React from "react"
import { Container } from "./styles/block"

export default function Block({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
