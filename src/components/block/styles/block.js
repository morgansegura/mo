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
    /* padding-top: 1.5rem;
    padding-bottom: 1.5rem; */
    color: ${({ theme }) => theme.textBlock};

    ${customMedia.greaterThan("lg")`

    `};
    background-color: ${({ theme }) => theme.bgBlock};
    h2.block-title {
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.textHeadlineBlock};
        border: 1px solid ${({ theme }) => theme.borderHeadlineBlock};
        border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock};
        background-color: ${({ theme }) => theme.bgHeadlineBlock};
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
