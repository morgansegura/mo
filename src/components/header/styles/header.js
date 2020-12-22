// import { Link } from "gatsby"
import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})
export const Wrapper = styled.header`
    width: 100%;

    .nav-box {
        display: flex;
        align-items: center;
    }
`
export const Container = styled.div`
    position: relative;
    width: 100%; 
    background: red;
    padding: 0.75rem 2rem;  
    display: flex;
    align-items: center;
    transition: all 0.3s ease-out;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: auto;
        left: 0;
        width: 100%;
        height: 100%;        
        opacity: 0.85;
        background-color: transparent;
        transition: opacity 0.4s ease-out;
    }
    &.scrolled-header {
        box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1);
        background-color: ${({ theme }) => theme.bgHeader};
    }
    ${customMedia.greaterThan("lg")`
        padding: 0.75rem 2rem; 
    `};
`

export const Navbar = styled.div``

export const LogoContainer = styled.div`
    .logo {
        width: 2.5rem;
        height: 2.5rem;
    }
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
