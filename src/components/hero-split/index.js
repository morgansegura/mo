import React from "react"

import {
    Container,
    ImageContainer,
    Image,
    Body,
    TextContainer,
    Title,
    Subtitle,
    Text,
    TextSmall,
    ButtonLink,
} from "./styles/hero-split"

export default function HeroSplit({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

HeroSplit.Image = function HeroSplitImage({ ...restProps }) {
    return <Image {...restProps} />
}

HeroSplit.ImageContainer = function HeroSplitImageContainer({
    children,
    ...restProps
}) {
    return <ImageContainer {...restProps}>{children}</ImageContainer>
}
HeroSplit.Body = function HeroSplitBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}

HeroSplit.TextContainer = function HeroSplitTextContainer({
    children,
    ...restProps
}) {
    return <TextContainer {...restProps}>{children}</TextContainer>
}
HeroSplit.Title = function HeroSplitTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

HeroSplit.Subtitle = function HeroSplitSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}

HeroSplit.Text = function HeroSplitText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

HeroSplit.TextSmall = function TextHeroSplitSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

HeroSplit.ButtonLink = function HeroSplitButtonLink({
    to,
    children,
    ...restProps
}) {
    return (
        <ButtonLink {...restProps} to={to}>
            {children}
        </ButtonLink>
    )
}
