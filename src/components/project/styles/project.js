import styled from "styled-components"
import Img from "gatsby-image"
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
    height: 100%;

    ${customMedia.between("md", "xxl")`
        
    `};
`

export const Image = styled(Img)``
export const Title = styled.h1``
export const Subtitle = styled.h2``
export const Text = styled.p``
