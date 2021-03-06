// import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
// import { generateMedia } from "styled-media-query"

// const customMedia = generateMedia({
//     sm: "640px",
//     md: "768px",
//     lg: "1024px",
//     xl: "1280px",
//     xxl: "1536px",
// })

export const SkillsBlock = styled.section`
    background-color: ${({ theme }) => theme.bgBlock1};

    h3 {
        color: ${({ theme }) => theme.borderHeadlineBlock1};
        border: 1px solid ${({ theme }) => theme.borderHeadlineBlock1};
        border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock1};
        background-color: ${({ theme }) => theme.bgHeadlineBlock1};
    }
    .card {
        background-color: ${({ theme }) => theme.bgCardBlock1};
        border: 1px solid ${({ theme }) => theme.borderCardBlock1};
        h4 {
            color: ${({ theme }) => theme.textHeadlineCardBlock1};
        }
        p {
            color: ${({ theme }) => theme.textCardBlock1};
        }
    }
`

export const StackBlock = styled.section`
    background-color: ${({ theme }) => theme.bgBlock2};
    h3 {
        color: ${({ theme }) => theme.borderHeadlineBlock2};
        border: 1px solid ${({ theme }) => theme.borderHeadlineBlock2};
        border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock2};
        background-color: ${({ theme }) => theme.bgHeadlineBlock2};
    }
    h4 {
    }
    p {
        color: ${({ theme }) => theme.textBlock2};
    }
    .card {
        background-color: ${({ theme }) => theme.bgCardBlock2};
        .icon-container {
            background-color: ${({ theme }) => theme.textHeadlineCardBlock2};
        }
        p {
            color: ${({ theme }) => theme.textCardBlock2};
            background-color: ${({ theme }) => theme.borderCardBlock2};
        }
        a {
            opacity: 0.9;
            transition: opacity 0.3s ease-out;
            &:hover {
                opacity: 1;
            }
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

export const StudyBlock = styled.section`
    background-color: ${({ theme }) => theme.bgBlock3};
    h3 {
        color: ${({ theme }) => theme.borderHeadlineBlock3};
        border: 1px solid ${({ theme }) => theme.borderHeadlineBlock3};
        border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock3};
        background-color: ${({ theme }) => theme.bgHeadlineBlock3};
    }
    h4 {
    }
    p {
        color: ${({ theme }) => theme.textBlock3};
    }
    .card {
        background-color: ${({ theme }) => theme.bgCardBlock3};
        border: 1px solid ${({ theme }) => theme.borderCardBlock3};
        p {
            color: ${({ theme }) => theme.textCardBlock3};
        }
        a {
            color: var(--gray-600);
        }
    }
`
export const DesignBlock = styled.section`
    background-color: ${({ theme }) => theme.bgBlock1};
    h3 {
        color: ${({ theme }) => theme.borderHeadlineBlock1};
        border: 1px solid ${({ theme }) => theme.borderHeadlineBlock1};
        border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock1};
        background-color: ${({ theme }) => theme.bgHeadlineBlock1};
    }
    h4 {
    }
    p {
        color: ${({ theme }) => theme.textBlock1};
    }
    .card {
        background-color: ${({ theme }) => theme.bgCardBlock1};
        border: 1px solid ${({ theme }) => theme.borderCardBlock1};
        p {
            color: ${({ theme }) => theme.textCardBlock1};
        }
        a {
            color: var(--gray-600);
        }
    }
`
export const CurrentBlock = styled.section`
    background-color: ${({ theme }) => theme.bgBlock4};
    h3 {
        color: ${({ theme }) => theme.borderHeadlineBlock4};
        border: 1px solid ${({ theme }) => theme.borderHeadlineBlock4};
        border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock4};
        background-color: ${({ theme }) => theme.bgHeadlineBlock4};
    }
    h4 {
    }
    p {
        color: ${({ theme }) => theme.textBlock4};
    }
    .card {
        background-color: ${({ theme }) => theme.bgCardBlock4};
        border: 1px solid ${({ theme }) => theme.borderCardBlock4};
        p {
            color: ${({ theme }) => theme.textCardBlock4};
        }
        a {
            color: var(--gray-600);
        }
    }
`

export const Button = styled(Link)`
    background-color: ${({ theme }) => theme.bgButton};
    color: ${({ theme }) => theme.textButton};
    transition: all 0.3s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
        color: ${({ theme }) => theme.textButtonHover};
        // box-shadow: 2px 0 10px 2px ${({ theme }) => theme.bgButton};
    }
`
