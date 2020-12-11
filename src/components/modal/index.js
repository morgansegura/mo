import * as React from "react"
import { Container, Inner, CloseButton } from "./styles/modal"

export default function Modal({ closeModal, children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner className="shadow-xl rounded-md">{children}</Inner>
        </Container>
    )
}

Modal.CloseButton = function ModalCloseButton({ children, ...restProps }) {
    return <CloseButton {...restProps}>{children}</CloseButton>
}
