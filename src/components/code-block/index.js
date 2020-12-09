import React from "react"
import {
    Container,
    Inner,
    Label,
    Row,
    Browser,
    BrowserButtonRed,
    BrowserButtonYellow,
    BrowserButtonGreen,
} from "./styles/code-block"

export default function CodeBlock({ browser = false, children, ...restProps }) {
    return (
        <Container {...restProps}>
            {browser && (
                <Browser>
                    <BrowserButtonRed />
                    <BrowserButtonYellow />
                    <BrowserButtonGreen />
                </Browser>
            )}
            <Inner>{children}</Inner>
        </Container>
    )
}
CodeBlock.Label = function CodeBlockLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}
CodeBlock.Row = function CodeBlockRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}
