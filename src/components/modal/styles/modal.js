import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: static;

    &:after {
        content: "";
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.bgBody};
        opacity: 0.95;
    }
`

export const CloseButton = styled.div`
    cursor: pointer;
    background-color: ${({ theme }) => theme.bgButton};
    color: ${({ theme }) => theme.textButton};
    transition: all 0.3s ease-out;

    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
        color: ${({ theme }) => theme.textButtonHover};
        // box-shadow: 2px 0 10px 2px ${({ theme }) => theme.bgButton};
    }
`
export const Inner = styled.div`
    position: relative;
    z-index: 10001;
    overflow: hidden;
    max-width: 450px;
    min-height: 100px;
    width: 100%;
    background-color: ${({ theme }) => theme.bgHeader};
    border: 1px solid ${({ theme }) => theme.borderHeadlineBlock1};
`
