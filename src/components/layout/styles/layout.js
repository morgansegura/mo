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
    
`
export const Container = styled.div`
    background-color: ${({ theme }) => theme.bgLayout};
    padding: 6rem 1.5rem 1.5rem 1.5rem;

    ${customMedia.greaterThan("lg")`
        padding: 6rem 2rem 2rem 2rem;
    `};
`
