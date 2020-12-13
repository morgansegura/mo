import styled from "styled-components"

export const Browser = styled.div`
    height: 1.75rem;
    border-radius: 6px 6px 0 0;
    background-color: ${({ theme }) => theme.codeBrowserBackground};
    border-top: 1px solid ${({ theme }) => theme.codeBrowserBorder};
    display: flex;
    align-items: center;
`
export const BrowserButtonRed = styled.div`
    width: 0.75rem;
    height: 0.75rem;
    margin-left: 0.5rem;
    border-radius: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    background-color: #ed655a;
`
export const BrowserButtonYellow = styled.div`
    width: 0.75rem;
    height: 0.75rem;
    margin-left: 0.5rem;
    border-radius: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    background-color: #e1c04c;
`
export const BrowserButtonGreen = styled.div`
    width: 0.75rem;
    height: 0.75rem;
    margin-left: 0.5rem;
    border-radius: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    background-color: #72be47;
`

export const Pre = styled.pre`
    position: relative;
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;
    overflow-x: auto;
    border-radius: 3px;

    & .token-lline {
        line-height: 1.3em;
        height: 1.3em;
    }
    font-family: "Courier New", Courier, monospace;
`

export const LineNo = styled.span`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`

export const CopyCode = styled.button`
    position: absolute;
    right: 0.25rem;
    border: 0;
    border-radius: 3px;
    margin: 0.25em;
    opacity: 0.3;
    &:hover {
        opacity: 1;
    }
`
