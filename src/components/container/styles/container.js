import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1600px",
    xxl: "1536",
})

export const Container = styled.div`
    ${customMedia.greaterThan("xl")`
	    display: grid;
		grid-column: 2;
    `};
`

export const Child = styled.div`
    ${customMedia.greaterThan("lg")`

    `};
`
