import styled from "styled-components"

export const Container = styled.footer``

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.bgFooter};
    color: ${({ theme }) => theme.textFooter};
    transition: height 0.15s ease-in-out;
    width: 100%;

    a,
    .social-icon {
        color: ${({ theme }) => theme.iconFooter};
        transition: all 0.3s ease-out;
        &:hover {
            color: ${({ theme }) => theme.iconFooterHover};
        }
    }
`
