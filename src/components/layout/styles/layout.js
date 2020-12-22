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
    position: realtive;
    z-index: 2;
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.4);

`
export const Container = styled.div`
    background-color: ${({ theme }) => theme.bgLayout};
    padding: 6rem 1.5rem 1.5rem 1.5rem;
    transform: translateX(0);
    transition: transform 0.3s ease-out;

    .nav-drawer-open & {
        transform: translateX(-200px);
    }    

    ${customMedia.greaterThan("lg")`
        padding: 6rem 2rem 2rem 2rem;
    `};
`
