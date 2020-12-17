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
    padding-top: 1rem;
    margin-top: 4rem;

    height: 100vh;

    ${customMedia.greaterThan("lg")`
        overflow-y: auto;
        margin-top: 4rem;
        height: calc(100vh - 6rem);
        margin-left: 290px;
    `};
`
