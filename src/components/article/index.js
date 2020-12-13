import React from "react"

import {
    Container,
    Title,
    Subtitle,
    Text,
    Caption,
    Image,
    BlockQuote,
} from "./styles/article"

export default function Article({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Article.Title = function ArticleTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Article.Subtitle = function ArticleSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}
Article.Text = function ArticleText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
Article.Caption = function ArticleCaption({ children, ...restProps }) {
    return <Caption {...restProps}>{children}</Caption>
}
Article.Image = function ArticleImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
}
Article.BlockQuote = function ArticleBlockQuote({ children, ...restProps }) {
    return <BlockQuote {...restProps}>{children}</BlockQuote>
}
