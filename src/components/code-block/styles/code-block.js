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

export const Container = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    position: relative;
    min-height: 12rem;
    z-index: 1;
    display: block;
    border-radius: 6px;
    font-size: 0.85rem;
    font-family: ${({ theme }) => theme.codeFontFamily};
    color: ${({ theme }) => theme.codeFontColor};
    background-color: ${({ theme }) => theme.codeBackground};
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1);

    &:after {
        content: "";
        z-index: -1;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        border-radius: 0 0 6px 6px;
        background-color: ${({ theme }) => theme.codeBrowserBackground};
        border-top: 1px solid ${({ theme }) => theme.codeBrowserBorder};
        display: flex;
        align-items: center;
    }
`
export const Inner = styled.div`
    position: relative;
    letter-spacing: 0.05em;
    z-index: 1;
    padding: 2rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: auto;
    /* overflow-x: scroll; */
`
export const Label = styled.span`
    position: absolute;
    border-radius: 3px;
    top: 100%;
    right: -0.45rem;
    padding: 0.35rem;
    font-size: 0.75rem;
    line-height: 1;
    font-family: var(--sans-font);
    background-color: ${({ theme }) => theme.codeTokenAtRule};
    color: ${({ theme }) => theme.codeBackground};
`
export const Row = styled.p`
    .data {
        color: ${({ theme }) => theme.codeTokenCData};
    }
    .punct {
        color: ${({ theme }) => theme.codeTokenPunctuation};
    }
    .const {
        color: ${({ theme }) => theme.codeTokenConstant};
    }
    .bool {
        color: ${({ theme }) => theme.codeTokenBoolean};
    }
    .lang {
        color: ${({ theme }) => theme.codeTokenLanguage};
    }
    .rule {
        color: ${({ theme }) => theme.codeTokenAtRule};
    }
    .key {
        color: ${({ theme }) => theme.codeTokenKeyword};
    }
    .reg {
        color: ${({ theme }) => theme.codeTokenRegex};
    }

    &.typewriter .string {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: 0.15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: 0.05em;
        animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: orange;
        }
    }
`
