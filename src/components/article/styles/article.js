import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

export const Container = styled.section`
    background-color: ${({ theme }) => theme.bgBlock1};
    ${customMedia.greaterThan("xxl")`
       
    `};
`
export const Title = styled.h1``
export const Subtitle = styled.h2``
export const Text = styled.p``
export const Image = styled.img``
export const Caption = styled.caption``
export const BlockQuote = styled.blockquote``
