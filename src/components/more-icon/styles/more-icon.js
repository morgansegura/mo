import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

export const Container = styled.div`
    position: relative;
    z-index: -1;
    font-size: 1.5rem;
    z-index: 10;
    font-family: var(--headline-font);
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    transform: translateX(-20px);
    transition: all 0.3s ease-out;

    svg {
        fill: ${({ theme }) => theme.iconHeader};
    }

    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        background-color: ${({ theme }) => theme.iconHeaderBGHover};
        width: 30px;
        height: 30px;
        border-radius: 100%;
        transform-origin: 50% 50%;
        transform: scale(0);
        transition: transform 0.2s ease-in;
    }
    .author-drawer-open & {
        &:after {
            /* background-color: ${({ theme }) => theme.iconHeaderBGHover}; */
            /* transform: scale(1); */
        }
    }
    &:hover {
        svg {
            fill: ${({ theme }) => theme.iconHeaderHover};
        }
        &:after {
            transform: scale(1);
            transition: transform 0.2s ease-out;
        }
    }
    ${customMedia.greaterThan("lg")`
        display: none;
   `};
`
