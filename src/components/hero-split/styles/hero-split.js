import styled from "styled-components"
import { Link } from "gatsby"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    small: "480px",
    medium: "768px",
    large: "1024px",
    huge: "1600px",
})
export const Container = styled.section`
    background-color: ${({ theme }) => theme.bgHero};
`
export const ImageContainer = styled.div`
    min-height: 100%;
    flex: 0 0 100%;
    max-width: 100%;

    ${customMedia.greaterThan("large")`
        flex: 0 0 50%;
        max-width: 50%;
    `};
`
export const Image = styled.img`
    position: relative;
    height: 100%;
    min-height: 300px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const Body = styled.div`
    background-color: ${({ theme }) => theme.bgCardHero};
    border: 1px solid ${({ theme }) => theme.borderCardHero};
`
export const TextContainer = styled.div``

export const Title = styled.h2`
    color: ${({ theme }) => theme.textHeadlineHero};
`
export const Subtitle = styled.h3`
    color: ${({ theme }) => theme.textHeadlineHero};
`
export const Text = styled.p`
    color: ${({ theme }) => theme.textHero};
`
export const TextSmall = styled.span`
    color: ${({ theme }) => theme.textOffsetHero};
`
export const ButtonLink = styled(Link)`
    background-color: ${({ theme }) => theme.bgButton};
    color: ${({ theme }) => theme.textButton};
    transition: all 0.3s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
        color: ${({ theme }) => theme.textButtonHover};
        // box-shadow: 2px 0 10px 2px ${({ theme }) => theme.bgButton};
    }
`
