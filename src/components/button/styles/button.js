import styled from "styled-components"
import { Link } from "gatsby"

// export const Container = styled.div``

export const ButtonLink = styled(Link)`
    background-color: ${({ theme }) => theme.bgButton};
    color: ${({ theme }) => theme.textButton};
    transition: all 0.3s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
        color: ${({ theme }) => theme.textButtonHover};
        box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1);
    }
`
export const Container = styled.div`
    background-color: ${({ theme }) => theme.bgButton};
    border-radius: 4px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    cursor: pointer;
    color: ${({ theme }) => theme.textButton};
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1);
    transition: all 0.3s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
        color: ${({ theme }) => theme.textButtonHover};
        box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1);
    }
`
