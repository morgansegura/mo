import React from "react"
import { Container, Pre } from "./styles/dump"

const Dump = props => (
    <Container>
        {Object.entries(props).map(([key, val]) => (
            <Pre key={key}>
                <strong>{key} ?</strong>
                {JSON.stringify(val, "", " ")}
            </Pre>
        ))}
    </Container>
)

export default Dump
