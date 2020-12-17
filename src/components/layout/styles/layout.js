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
    position: fixed;
    height: auto;
    overflow: visible;
    overflow-x: hidden;

    ${customMedia.greaterThan("lg")`
        padding: 1rem;

        &:before {
            content: '';
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 1rem;
            background-color: ${({ theme }) => theme.bgBody};
            z-index: 9999;
        }        
        &:after {
            content: '';
            position: fixed;
            left: 0;
            top: auto;
            bottom: 0;
            width: 100%;
            height: 1rem;
            background-color: ${({ theme }) => theme.bgBody};
            z-index: 9999;
        }        
    `};
`
export const Container = styled.div`
    background-color: ${({ theme }) => theme.bgLayout};
    position: relative;
    padding-top: 5rem;

    ${customMedia.greaterThan("lg")`
        height: 100%;
        margin-left: 290px;
    `};
`
