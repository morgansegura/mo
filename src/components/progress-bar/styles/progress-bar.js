import styled from "styled-components"

export const SVG = styled.svg`
    &.svg {
        display: block;
        margin: auto;
        position: relative;
        max-width: 100%;
    }

    .svg-circle-bg {
        fill: none;
    }

    .svg-circle {
        fill: none;
    }
    .svg-circle-text {
        font-family: var(--sans-font);
        font-size: 0.75rem;
        font-weight: normal;
        text-anchor: middle;
        transform: translate(0, 8%);
        fill: #fff;
    }

    .svg-line-bg {
        fill: red;
    }

    .svg-line {
        fill: green;
    }
    .svg-line-text {
        font-family: var(--sans-font);
        font-size: 0.75rem;
        font-weight: normal;
        text-anchor: end;
        transform: translate(0, 8%);
        height: 20px;
        fill: #fff;
    }
`
