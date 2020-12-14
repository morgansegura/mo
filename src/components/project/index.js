import React from "react"
import { Container, Image, Title, Subtitle, Text } from "./styles/project"

export default function Project({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Project.Title = function ProjectTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Project.Subtitle = function ProjectSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}
Project.Text = function ProjectText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
Project.Image = function ProjectImage({ ...restProps }) {
    return <Image {...restProps} />
}
