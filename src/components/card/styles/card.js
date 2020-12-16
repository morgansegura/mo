import styled from "styled-components"
// import { generateMedia } from "styled-media-query"

// const customMedia = generateMedia({
//     sm: "640px",
//     md: "768px",
//     lg: "1024px",
//     xl: "1280px",
//     xxl: "1536px",
// })

export const Container = styled.div`
    background-color: ${({ theme }) => theme.bgCardBlock};
    border: 1px solid ${({ theme }) => theme.borderCardBlock};
    color: ${({ theme }) => theme.textCardBlock};
    box-shadow: 0 3px 2px 2px rgba(0, 0, 0, 0.1);
    h1,
    h2,
    h3 {
        color: ${({ theme }) => theme.textHeadlineCardBlock};
    }

    a {
        opacity: 0.9;
        transition: opacity 0.3s ease-out;
        &:hover {
            opacity: 1;
        }
    }
    .bg-offset {
        background-color: ${({ theme }) => theme.bgOffsetBlock};
    }
    .small-card {
        background-color: ${({ theme }) => theme.bgCardBlock};
    }
    .bg-label {
        left: 100%;
        min-width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(-150%);
        color: ${({ theme }) => theme.textOffsetBlock};
        background-color: ${({ theme }) => theme.bgOffsetBlock};
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
