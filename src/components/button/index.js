import React from "react"

import { Container } from "./styles/button"

export default function Button({ url, children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
