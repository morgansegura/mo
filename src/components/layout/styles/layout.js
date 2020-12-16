import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

// Layout Components
export const Wrapper = styled.div`
    ${customMedia.greaterThan("lg")`
        padding: 1rem;
    `};
`
export const Container = styled.div`
    background-color: ${({ theme }) => theme.bgLayout};
    position: relative;
    margin-top: 4rem;
    padding-top: 1rem;
    overflow-y: auto;
    height: calc(100vh - 6rem);

    ${customMedia.greaterThan("lg")`
        margin-left: 290px;
    `};
`
