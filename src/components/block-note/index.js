import React from "react"
import { Container, Title, Subtitle, Text } from "./styles/block-note"

export default function BlockNote({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

BlockNote.Title = function BlockNoteTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
BlockNote.Subtitle = function BlockNoteSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}
BlockNote.Text = function BlockNoteText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
