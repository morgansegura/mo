import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

export const Container = styled.div`
    .block1 & {
        background-color: ${({ theme }) => theme.bgCardBlock1};
        border: 1px solid ${({ theme }) => theme.borderCardBlock1};

        & h3 {
            color: ${({ theme }) => theme.textHeadlineCardBlock1};
        }
        & > p,
        & p {
            color: ${({ theme }) => theme.textCardBlock1};
        }
        & > a,
        & a {
            opacity: 0.9;
            transition: opacity 0.3s ease-out;
            &:hover {
                opacity: 1;
            }
        }
        & .bg-offset {
            background-color: ${({ theme }) => theme.bgOffsetBlock1};
        }
        & .small-card {
            background-color: ${({ theme }) => theme.bgCardBlock1};
        }
        & .bg-label {
            color: ${({ theme }) => theme.textOffsetBlock1};
            background-color: ${({ theme }) => theme.bgOffsetBlock1};
        }
    }
    .block2 & {
        background-color: ${({ theme }) => theme.bgCardBlock2};
        border: 1px solid ${({ theme }) => theme.borderCardBlock2};
        & h3 {
            color: ${({ theme }) => theme.textHeadlineCardBlock2};
        }
        & > p,
        & p {
            color: ${({ theme }) => theme.textCardBlock2};
        }
        & > a,
        & a {
            opacity: 0.9;
            transition: opacity 0.3s ease-out;
            &:hover {
                opacity: 1;
            }
        }
        & .bg-offset {
            background-color: ${({ theme }) => theme.bgOffsetBlock2};
        }
        & .small-card {
            background-color: ${({ theme }) => theme.bgCardBlock2};
        }
        & .bg-label {
            color: ${({ theme }) => theme.textOffsetBlock2};
            background-color: ${({ theme }) => theme.bgOffsetBlock2};
        }
    }
    .block3 & {
        background-color: ${({ theme }) => theme.bgCardBlock3};
        border: 1px solid ${({ theme }) => theme.borderCardBlock3};
        & h3,
        & h3 {
            color: ${({ theme }) => theme.textHeadlineCardBlock3};
        }
        & > p,
        & p {
            color: ${({ theme }) => theme.textCardBlock3};
        }
        & > a,
        & a {
            opacity: 0.9;
            transition: opacity 0.3s ease-out;
            &:hover {
                opacity: 1;
            }
        }
        & .bg-offset {
            background-color: ${({ theme }) => theme.bgOffsetBlock3};
        }
        & .small-card {
            background-color: ${({ theme }) => theme.bgCardBlock3};
        }
        & .bg-label {
            color: ${({ theme }) => theme.textOffsetBlock3};
            background-color: ${({ theme }) => theme.bgOffsetBlock3};
        }
    }
    .block4 & {
        background-color: ${({ theme }) => theme.bgCardBlock4};
        border: 1px solid ${({ theme }) => theme.borderCardBlock4};
        & h3 {
            color: ${({ theme }) => theme.textHeadlineCardBlock4};
        }
        & > p,
        & p {
            color: ${({ theme }) => theme.textCardBlock4};
        }
        & > a,
        & a {
            opacity: 0.9;
            transition: opacity 0.3s ease-out;
            &:hover {
                opacity: 1;
            }
        }
        & .bg-offset {
            background-color: ${({ theme }) => theme.bgOffsetBlock4};
        }
        & .small-card {
            background-color: ${({ theme }) => theme.bgCardBlock4};
        }
        & .bg-label {
            left: 100%;
            min-width: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateX(-150%);
            color: ${({ theme }) => theme.textOffsetBlock4};
            background-color: ${({ theme }) => theme.bgOffsetBlock4};
        }
    }
`
export const Header = styled.header`
    margin-bottom: 1.5rem;
`
export const SectionTitle = styled.h2``
export const Footer = styled.footer``
export const Title = styled.div``
export const Subtitle = styled.div``
export const Text = styled.div``
export const Icon = styled.div``
export const Image = styled.img``
