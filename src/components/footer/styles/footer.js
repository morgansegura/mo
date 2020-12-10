import styled from "styled-components"

export const Container = styled.footer``

export const Wrapper = styled.div`
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.textFooter};
    transition: height 0.15s ease-in-out;
    width: 100%;

    &:before {
        content: "";
        z-index: -1;
        position: absolute;
        top: auto;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.bgFooter};
        opacity: 0.85;
        border-top: 1px solid ${({ theme }) => theme.borderHeader};
        transition: opacity 0.4s ease-out;
    }

    a,
    .social-icon {
        color: ${({ theme }) => theme.iconFooter};
        transition: all 0.3s ease-out;
        &:hover {
            color: ${({ theme }) => theme.iconFooterHover};
        }
    }
`
