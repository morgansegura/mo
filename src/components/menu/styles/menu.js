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
        position: relative;        
        background-color: ${({ theme }) => theme.bgDrawer};
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        border: 1px solid ${({ theme }) => theme.borderDrawer};
        border-radius: 0.65rem;
        transition: transform 0.3s ease-out;

        ${customMedia.greaterThan("lg")`
            position: fixed;
            width: 290px;
            top: 7rem;
            left: 1rem;
            bottom: auto;
            margin: auto;
            transform: translateY(0) translateX(0);
            background-color: transparent;
        `}

        .author-drawer-open & {
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

        .sub-author-block {
            overflow-y: auto;
        }
        .author-block {
            background-color: ${({ theme }) => theme.bgDrawerMenu};
            padding-top: 1.5rem;
            width: 100%;
            border-radius: 0.75rem;
        }
        .skills-block {
            background-color: ${({ theme }) => theme.borderDrawer};
            padding: 1rem 2rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        .social-block {
            /* position: absolute; */
            width: 100%;
            /* bottom: 0; */
            display: flex;
            padding: 1.5rem 2rem;
            justify-content: space-between;
            background-color: ${({ theme }) => theme.bgDrawerMenu};

            a {
                color: ${({ theme }) => theme.accentColor};
                transition: all 0.3s ease-out;

                &:hover {
                    opacity: 0.75;
                }
            }
            ${customMedia.greaterThan("lg")`
                padding: 1rem 2.5rem;
                border-radius: 9999px;
	        `}
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
            svg {
                .svg-circle-bg {
                    stroke: ${({ theme }) => theme.borderDrawer};
                }
                .svg-circle {
                    stroke: ${({ theme }) => theme.accentColor};
                }
            }
            .label {
                margin-top: 0.75rem;
                font-size: 0.75rem;
                color: ${({ theme }) => theme.textBase};
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
                    .svg-line-bg {
                        stroke: ${({ theme }) => theme.borderDrawer};
                    }
                    .svg-line {
                        stroke: ${({ theme }) => theme.accentColor};
                    }
                }
            }

            .label {
                justify-self: start;
                font-size: 0.75rem;
                color: ${({ theme }) => theme.textBase};
            }
            .svg-line-label-box {
                display: flex;
                justify-content: space-between;
            }
            .svg-line-text {
                font-size: 0.75rem;
                color: ${({ theme }) => theme.textNeutral};
            }
        }

        ${customMedia.greaterThan("lg")`
            transform: translateY(0) translateX(0);
	    `}
    }
    &.nav-menu {
        position: fixed;
        top: 4rem;
        bottom: 0;
        left: auto;
        right: 0;
        width: 200px;
        padding-top: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: ${({ theme }) => theme.bgDrawer};
        transform: translateY(0) translateX(100%);
        transition: transform 0.3s ease-out;

        ${customMedia.greaterThan("lg")`
            top: 5rem;
            height: calc(100% - 6rem);
        `}

        .nav-drawer-open & {
            /* box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.1); */
            transform: translateX(0);

            ${customMedia.greaterThan("lg")`
                transform: translateX(-1rem);
            `}
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
