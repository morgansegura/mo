import styled from "styled-components"
import { Link } from "gatsby"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgHero};
    border: 1px solid ${({ theme }) => theme.borderHero};
    flex-direction: column;

    ${customMedia.between("")`
        flex-direction: column;
    `};
    ${customMedia.greaterThan("xxl")`
   
    `};
`
export const ImageContainer = styled.div`
    min-height: 100%;
    flex: 0 0 100%;
    max-width: 100%;

    ${customMedia.between("md", "xxl")`

    `};

    ${customMedia.greaterThan("xxl")`

    `};
    .bg-image {
        position: relative;
        height: 100%;
        min-height: 300px;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
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
export const Body = styled.div``
export const TextContainer = styled.div``

export const Title = styled.h2`
    color: ${({ theme }) => theme.textHeadlineHero};
    font-size: 2.9rem;
    line-height: 0.95;
    margin-bottom: 1rem;

    ${customMedia.between("md", "xxl")`
        font-size: 4rem;
    `};
    ${customMedia.greaterThan("xxl")`
        margin-bottom: 2rem;
    `};
`
export const Subtitle = styled.h3`
    color: ${({ theme }) => theme.textHeadlineHero};
`
export const Text = styled.p`
    color: ${({ theme }) => theme.textHero};
`
export const TextSmall = styled.span`
    color: ${({ theme }) => theme.textOffsetHero};
    margin-bottom: 1rem;
`
export const ButtonLink = styled(Link)`
    background-color: ${({ theme }) => theme.bgButton};
    color: ${({ theme }) => theme.textButton};
    transition: all 0.3s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
        color: ${({ theme }) => theme.textButtonHover};
        box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1);
    }
`
