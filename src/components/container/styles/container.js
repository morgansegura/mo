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
    ${customMedia.greaterThan("xxl")`
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
    `};
`

export const Child = styled.div`
    ${customMedia.greaterThan("lg")`

    `};
`
