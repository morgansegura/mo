import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

export const Container = styled.div``
export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 800;
    color: white;
    margin-bottom: 2rem;

    ${customMedia.greaterThan("lg")`
		font-size: 9rem;
		line-height: 10rem;
		font-weight: 800;
		color: white;
		margin-bottom: 1rem;
	`}
`
export const Subtitle = styled.h3`
    font-size: 1.5rem;
    line-height: 1.75;
    margin-bottom: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.textHeadlineHero};

    ${customMedia.greaterThan("lg")`
		font-size: 2.5rem;
		line-height: 3.5rem;
		font-weight: 400;
		color: white;
	`}
`
export const Text = styled.p`
    position: relative;
    display: block;
    font-size: 1.125rem;
    line-height: 2.5rem;
    /* padding-top: 2rem; */
    font-weight: 400;

    ${customMedia.greaterThan("lg")`
        position: relative;
        display: block;
        font-size: 1.25rem;
        line-height: 2.5rem;
        padding-bottom: 3rem;
    `}

    ${Container}.left & {
        padding-left: 2rem;
    }
    ${Container}.right & {
        padding-right: 2rem;
    }
`
