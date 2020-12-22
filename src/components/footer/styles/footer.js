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
    border-radius: 0.75rem;
    padding: 1rem 2rem;
    margin-top: 1rem;

    ${customMedia.greaterThan("lg")`
        margin-top: 2rem;
    `};

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

`
