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
    position: fixed;
    width: 100%;
    .nav-box {
        position: fixed;
        z-index: 12;
        height: 4rem;
        width: 5rem;
        display: flex;
        align-items: center;
        top: 0;
        right: 1rem;

        ${customMedia.greaterThan("lg")`
            top: 1rem;
            right: 2rem;      
        `};
    }
`
export const Container = styled.div`
    position: relative;
    z-index: 10;
    transition: height 0.15s ease-in-out;
    width: 100%;
    height: 4rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border: 1px solid ${({ theme }) => theme.borderHeader};
    /* box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1); */

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
        transition: opacity 0.4s ease-out;
    }
    &.scrolled-header {
        /* height: 5rem; */
    }
    ${customMedia.greaterThan("lg")`
        width: calc(100% - 2rem);        
    `};
    ${customMedia.greaterThan("xl")`
        
    `};
`

export const Navbar = styled.div``

export const LogoContainer = styled.div`
    height: 2.5rem;
    .logo {
        position: relative;
        z-index: 11;
        margin-left: 1.5rem;
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
    ${customMedia.greaterThan("lg")`
        .logo {
            margin-left: 0;
        }
	`}
`
