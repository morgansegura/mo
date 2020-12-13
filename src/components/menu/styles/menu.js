import { Link } from "gatsby"
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
    z-index: 10;
    background-color: ${({ theme }) => theme.bgDrawer};
    border-right: 1px solid ${({ theme }) => theme.borderDrawer};
`

export const LogoWrapper = styled.div`
    height: 4rem;

    ${customMedia.greaterThan("lg")`
        height: 5rem
	`}
`

export const LogoContainer = styled(Link)`
    width: 2.5rem;
    height: 2.5rem;
    .cls-2 {
        fill: ${({ theme }) => theme.logo};
    }
    ${customMedia.greaterThan("lg")`
        width: 3rem;
        height: 3rem;
	`}
`
export const ItemContainer = styled.div``

export const Item = styled(Link)`
    padding: 1.25rem 1rem;
    background-color: ${({ theme }) => theme.bgDrawerNavItem};
    color: ${({ theme }) => theme.textDrawerNavItem};
    border-bottom: 1px solid ${({ theme }) => theme.borderDrawerNavItem};
    transition: all 0.3 ease-out;

    &:hover {
        background-color: ${({ theme }) => theme.bgDrawerNavItemHover};
        border-bottom-color: ${({ theme }) => theme.borderDrawerNavItem};
        color: ${({ theme }) => theme.textDrawerNavItemHover};
    }
    .label {
        font-size: 0.65rem;
        text-transform: uppercase;
    }
    .icon {
        font-size: 1.25rem;
    }
`
