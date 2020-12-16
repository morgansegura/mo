import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

export const Container = styled.footer`
    position: relative;
    z-index: 1;
    background-color: ${({ theme }) => theme.bgFooter};
    border: 1px solid ${({ theme }) => theme.borderFooter};
    color: ${({ theme }) => theme.textFooter};
    width: 100%;
    padding: 1rem 2rem;
    /* box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1); */

    a,
    .social-icon {
        color: ${({ theme }) => theme.iconFooter};
        transition: all 0.3s ease-out;
        &:hover {
            color: ${({ theme }) => theme.iconFooterHover};
        }
    }
`

export const Wrapper = styled.div`
    padding-right: 1rem;
    padding-left: 1rem;

    ${customMedia.greaterThan("lg")`
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    `};
`
