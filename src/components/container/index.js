import React from "react"
import { Container, Child } from "./styles/container"

export default function Containers({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Containers.Child = function ContainersChild({ children, ...restProps }) {
    return <Child {...restProps}>{children}</Child>
}
