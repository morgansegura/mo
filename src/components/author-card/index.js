import React from "react"
import { Container, Image, Title, Subtitle, Text } from "./styles/author-card"

export default function AuthorCard({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

AuthorCard.Image = function AuthorCardImage({ ...restProps }) {
    return <Image {...restProps} />
}

AuthorCard.Title = function AuthorCardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
AuthorCard.Subtitle = function AuthorCardSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}
AuthorCard.Text = function AuthorCardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
