import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.bgHeader};
`
export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.borderHeadlineBlock1};
    /* background-color: ${({ theme }) => theme.borderHeadlineBlock1}; */
`
export const Title = styled.h4`
    color: ${({ theme }) => theme.bgButton};
    font-size: 2rem;
    margin-bottom: 2rem;
`
export const Subtitle = styled.h5``
export const Text = styled.p``
export const Label = styled.label``
export const TextArea = styled.textarea``
export const Button = styled.button`
    background-color: ${({ theme }) => theme.bgButton};
    color: ${({ theme }) => theme.textButton};
    transition: all 0.3s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
        color: ${({ theme }) => theme.textButtonHover};
        // box-shadow: 2px 0 10px 2px ${({ theme }) => theme.bgButton};
    }
`
