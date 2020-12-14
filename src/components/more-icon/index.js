import React from "react"
import { AiOutlineMore } from "react-icons/ai"
import { Container } from "./styles/more-icon"

export default function MoreIcon({ ...restProps }) {
    return (
        <Container {...restProps}>
            <AiOutlineMore />
        </Container>
    )
}
