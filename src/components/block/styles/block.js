import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

export const Container = styled.section`
    height: 100%;
    padding: 2.5rem;

    ${customMedia.greaterThan("lg")`
        padding: 4rem;
    `};

    &.block1 {
        background-color: ${({ theme }) => theme.bgBlock1};
        h2 {
            color: ${({ theme }) => theme.textHeadlineBlock1};
            border: 1px solid ${({ theme }) => theme.borderHeadlineBlock1};
            border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock1};
            background-color: ${({ theme }) => theme.bgHeadlineBlock1};
        }
        h3 {
            font-family: var(--headline-serif);
        }
        p {
            color: ${({ theme }) => theme.textBlock1};
        }
    }
    &.block2 {
        background-color: ${({ theme }) => theme.bgBlock2};
        h2 {
            color: ${({ theme }) => theme.textHeadlineBlock2};
            border: 1px solid ${({ theme }) => theme.borderHeadlineBlock2};
            border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock2};
            background-color: ${({ theme }) => theme.bgHeadlineBlock2};
        }

        h3 {
            font-family: var(--headline-serif);
        }
        p {
            color: ${({ theme }) => theme.textBlock2};
        }
    }
    &.block3 {
        background-color: ${({ theme }) => theme.bgBlock3};
        h2 {
            color: ${({ theme }) => theme.textHeadlineBlock3};
            border: 1px solid ${({ theme }) => theme.borderHeadlineBlock3};
            border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock3};
            background-color: ${({ theme }) => theme.bgHeadlineBlock3};
        }

        h3 {
            font-family: var(--headline-serif);
        }
        p {
            color: ${({ theme }) => theme.textBlock3};
        }
    }
    &.block4 {
        background-color: ${({ theme }) => theme.bgBlock4};
        h2 {
            color: ${({ theme }) => theme.textHeadlineBlock4};
            border: 1px solid ${({ theme }) => theme.borderHeadlineBlock4};
            border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock4};
            background-color: ${({ theme }) => theme.bgHeadlineBlock4};
        }
        h3 {
            font-family: var(--headline-serif);
        }
        p {
            color: ${({ theme }) => theme.textBlock4};
        }
    }

    .sass {
        color: #c69;
    }
    .vue {
        color: #41b883;
    }
    .laravel {
        color: #f05340;
    }
    .tailwind {
        color: rgb(20, 180, 198);
    }
    .react {
        color: #61dbfb;
    }
    .node {
        color: #3c873a;
    }
    .graphql {
        color: #de33a6;
    }
    .git {
        color: #eb4d27;
    }
    .vscode {
        fill: #0166b8;
    }
    .nuxt {
        color: #0f8775;
    }
    .gatsby {
        fill: #663399;
    }
    .netlify {
        fill: #4c9bbe;
    }
`
export const Title = styled.h2``
export const Header = styled.header`
    margin-bottom: 1.5rem;
`
