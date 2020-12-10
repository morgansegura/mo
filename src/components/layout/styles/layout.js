import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

// Layout Components
export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.bgBody};
`
export const Container = styled.div`
    position: relative;
    height: 100%;
    ${customMedia.greaterThan("lg")`
      &:before {
        content: '';
        position: absolute;
        width: 1px;
        left: 0;
        top: 0;
        bottom: 0;
        border-right: 1px solid ${({ theme }) => theme.borderContent};
      }  
  `};
    ${customMedia.greaterThan("xl")`

  `};
`
