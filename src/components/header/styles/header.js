import { Link } from "gatsby"
import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1600px",
    xxl: "1536",
})
export const Container = styled.header``
export const Wrapper = styled.div`
    transition: height 0.15s ease-in-out;
    width: 100%;
    height: 5rem;
    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: auto;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.bgHeader};
        opacity: 0.85;
        border-bottom: 1px solid ${({ theme }) => theme.borderHeader};
        transition: opacity 0.4s ease-out;
    }
    &.scrolled-header {
        /* height: 5rem; */
    }
    ${customMedia.greaterThan("lg")`
        width: calc(100% - 6rem);
        margin-left: 6rem; 
        &.scrolled-header:before {
            opacity: 0.85;
        }    
    `};
    ${customMedia.greaterThan("xl")`
        margin-left: 0;
        border-left: 0 solid transparent;   
        border-bottom: 1px solid ${({ theme }) => theme.borderContent};
        width: 100%;
    `};
`

export const Navbar = styled.div``

export const LogoContainer = styled(Link)`
    width: 3rem;
    height: 3rem;
    .cls-2 {
        fill: ${({ theme }) => theme.logo};
        transition: fill 0.3s ease-out;
    }
    &:hover {
        .cls-2 {
            fill: ${({ theme }) => theme.logoHover};
        }
    }
`
