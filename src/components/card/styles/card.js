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
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.textCardBlock};

    .card-title {
        font-family: var(--headline-font);
        font-weight: 600;
        color: ${({ theme }) => theme.textHeadlineCardBlock};
    }

    .card-link {
        opacity: 0.9;
        transition: opacity 0.3s ease-out;
        &:hover {
            opacity: 1;
        }
    }
    .bg-offset {
        background-color: ${({ theme }) => theme.bgOffsetBlock};
    }
`
export const Header = styled.header`

`
export const SectionTitle = styled.h2``
export const Footer = styled.footer``
export const Title = styled.div``
export const Subtitle = styled.div``
export const Text = styled.div``
export const Icon = styled.div``
export const Image = styled.img``
