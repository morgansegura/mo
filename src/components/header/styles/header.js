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
        top: auto;
        right: 0;

        ${customMedia.greaterThan("lg")`
            right: 2rem;      
        `};
    }
    ${customMedia.greaterThan("lg")`
        width: calc(100% - 0.5rem);
    `};
`
export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    z-index: 10;
    width: 100%;
    height: 4rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition: all 0.15s ease-in-out;
    /* border: 1px solid ${({ theme }) => theme.borderHeader}; */
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1);

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

        ${customMedia.greaterThan("lg")`
            border-radius: 0.75rem;  
        `};
    }
    &.scrolled-header {
        box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1);
    }
    ${customMedia.greaterThan("lg")`
        border-radius: 0.75rem;
        height: 4.5rem;
        width: calc(100% - 25px);        
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
