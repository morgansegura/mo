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
    &.author-menu {
        z-index: 10;
        position: fixed;
        top: 0;
        bottom: 0;
        right: auto;
        left: 0;
        width: 290px;
        margin-top: 4rem;
        background-color: ${({ theme }) => theme.bgDrawer};
        border-right: 1px solid ${({ theme }) => theme.borderDrawer};
        transform: translateY(0) translateX(-100%);
        transition: transform 0.3s ease-out;

        .author-drawer-open & {
            transform: translateY(0) translateX(0);
        }

        .title {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.textDrawerNavItemHover};
        }
        .subtitle {
            font-weight: normal;
            font-size: 0.75rem;
            color: ${({ theme }) => theme.textDrawerNavItem};
        }
        .text {
            font-weight: normal;
            font-size: 0.75rem;
            color: ${({ theme }) => theme.textDrawerNavItem};
        }
        .hr {
            box-sizing: border-box;
            height: 2px;
            width: 100%;
            border-radius: 30px;
            display: block;
            margin-top: 1.5rem;
            background-color: ${({ theme }) => theme.borderDrawer};
        }

        .author-block {
            background-color: ${({ theme }) => theme.borderDrawer};
            padding-top: 1.5rem;
            width: 100%;
        }
        .skills-block {
            padding: 1.5rem 2rem;
        }
        .circle-progress {
            width: 100%;
            padding-left: 2rem;
            padding-right: 2rem;
            box-sizing: border-box;
            text-align: center;

            &-inner {
                text-align: center;
            }

            .label {
                margin-top: 0.75rem;
                font-size: 0.75rem;
                color: white;
            }
        }
        .line-progress {
            width: 100%;
            text-align: left;

            &-inner {
                width: 100%;
                position: relative;
                margin-bottom: 0.75rem;

                svg {
                    .svg-line {
                        stroke: green;
                    }
                    .svg-line-bg {
                        stroke: red;
                    }
                }
            }

            .label {
                justify-self: start;
                font-size: 0.75rem;
                color: white;
            }
            .svg-line-label-box {
                display: flex;
                justify-content: space-between;
            }
            .svg-line-text {
                font-size: 0.75rem;
                color: white;
            }
        }

        ${customMedia.greaterThan("lg")`
            transform: translateY(0) translateX(0);
	    `}
    }
    &.nav-menu {
        position: fixed;
        top: 0;
        bottom: 0;
        left: auto;
        right: 0;
        width: 200px;
        padding-top: 5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: ${({ theme }) => theme.bgDrawer};
        border-right: 1px solid ${({ theme }) => theme.borderDrawer};
        transform: translateY(0) translateX(100%);
        transition: transform 0.3s ease-out;

        .nav-drawer-open & {
            transform: translateX(0);
        }
    }
`

export const LogoWrapper = styled.div`
    height: 4rem;

    ${customMedia.greaterThan("lg")`
        height: 5rem
	`}
`

export const LogoContainer = styled(Link)`
    .logo {
        width: 2.5rem;
        height: 2.5rem;
    }
    .cls-2 {
        fill: ${({ theme }) => theme.logo};
        transition: fill 0.3s ease-out;

        &:hover {
            fill: ${({ theme }) => theme.logoHover};
        }
    }
    ${customMedia.greaterThan("lg")`
        .logo {
            width: 3rem;
            height: 3rem;
        }
	`}
`
export const ItemContainer = styled.div`
    .nav-drawer-open & {
    }
`

export const Item = styled(Link)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem 1rem;
    background-color: ${({ theme }) => theme.bgDrawerNavItem};
    color: ${({ theme }) => theme.textDrawerNavItem};
    border-bottom: 1px solid ${({ theme }) => theme.borderDrawerNavItem};
    transition: all 0.3s ease-out;

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
