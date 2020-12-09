import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    small: "480px",
    medium: "768px",
    large: "1024px",
    huge: "1600px",
})

// Layout Components
export const Wrapper = styled.div``
export const Container = styled.div`
    position: relative;
    height: 100%;
    ${customMedia.greaterThan("large")`

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
    ${customMedia.greaterThan("huge")`

  `};
`
