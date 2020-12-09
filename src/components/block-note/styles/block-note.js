import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    small: "480px",
    medium: "768px",
    large: "1024px",
    huge: "1600px",
})

export const Container = styled.div``
export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 800;
    color: white;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.textHeadlineHero};

    ${customMedia.greaterThan("large")`
		font-size: 9rem;
		line-height: 10rem;
		font-weight: 800;
		color: white;
		margin-bottom: 1rem;
		width: 50%;
	`}
`
export const Subtitle = styled.h3`
    font-size: 1.5rem;
    line-height: 1.75;
    margin-bottom: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.textHeadlineHero};

    ${customMedia.greaterThan("large")`
		font-size: 2.5rem;
		line-height: 3.5rem;
		margin-bottom: 3rem;
		font-weight: 400;
		color: white;
		width: 50%;
	`}
`
export const Text = styled.p`
    position: relative;
    display: block;
    font-size: 1.125rem;
    line-height: 2.5rem;
    padding-top: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.textHeadlineHero};

    ${customMedia.greaterThan("large")`
        position: relative;
        display: block;
        font-size: 1.25rem;
        line-height: 2.5rem;
        margin-bottom: 3rem;
        width: 65%;
    `}

    ${Container}.left & {
        padding-left: 2rem;
    }
    ${Container}.right & {
        padding-right: 2rem;
    }

    &:after {
        content: "";
        z-index: -1;
        opacity: 0.2;
        position: absolute;
        top: 0;
        width: 100%;
        border-radius: 30px;
        background-color: pink;
        height: 0.25rem;

        ${customMedia.greaterThan("large")`
            width: 0.125rem;
		`}

        ${Container}.left & {
            left: 0;
        }
        ${Container}.right & {
            right: 0;
        }
    }
`
