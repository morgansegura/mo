import React from "react"
import { Container, Header, Title } from "./styles/block"

export default function Block({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Block.Header = function BlockHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}
Block.Title = function BlockTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
