import React from "react"

import {
    Container,
    Header,
    Footer,
    Title,
    Subtitle,
    Text,
    Icon,
    Image,
} from "./styles/card"

export default function Card({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Card.Header = function CardHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}
Card.Footer = function CardFooter({ children, ...restProps }) {
    return <Footer {...restProps}>{children}</Footer>
}
Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}
Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
Card.Icon = function CardIcon({ ...restProps }) {
    return <Icon {...restProps} />
}
Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />
}
