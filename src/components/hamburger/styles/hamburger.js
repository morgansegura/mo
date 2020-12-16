import styled from "styled-components"
import { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
})

export const Middle = styled.div``
export const Inner = styled.div`
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 14px;
    /* background: red; */

    .nav-drawer-open & {
        z-index: 11;
        margin-bottom: 0;
    }

    &:before,
    &:after,
    & .hamburger__center {
        content: "";
        position: absolute;
        z-index: 1;
        background-color: ${({ theme }) => theme.iconHeader};
        height: 3px;
        border-radius: 10px;
        border: none;
        transition: background-color 0.2s ease-out;
        width: 30px;
    }
    &:before {
        top: 0;
        width: 20px;
        transform-origin: 50% 50%;
        transform: translateX(0) translateY(0) rotate(0);
        transition: translateY 0.5s ease-out;

        .nav-drawer-open & {
            top: 50%;
            transform: translateX(0) translateY(-50%) rotate(0);
            opacity: 0;
        }
    }
    & .hamburger__center {
        top: 50%;
        width: 20px;
        transform-origin: 50% 50%;
        transform: translateX(0) translateY(-50%) rotate(0);
        transition: background-color 0.3s ease-out;

        .nav-drawer-open & {
            width: 20px;
            transform: translateX(0) translateY(-50%) rotate(-45deg);
            transition: transform 0.2s ease-out, rotate 0.2s ease-out;
        }
    }
    &:after {
        top: 100%;
        width: 20px;
        transform-origin: 50% 50%;
        transform: translateX(0) translateY(-100%) rotate(0);
        transition: background-color 0.3s ease-out;

        .nav-drawer-open & {
            top: 50%;
            width: 20px;
            transform: translateX(0) translateY(-50%) rotate(45deg);
            transition: transform 0.2s ease-out, rotate 0.2s ease-out;
        }
    }
    &:hover {
        &.hamburger:before,
        &.hamburger:after,
        & .hamburger__center {
            background-color: ${({ theme }) => theme.iconHeaderHover};
        }
    }
`

export const Container = styled.div`
    position: relative;
    top: 0;
    font-family: var(--headline-font);
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    transform: translateX(0);
    transition: transform 0.3s ease-out;

    .nav-drawer-open & {
        /* transform: translateX(-80px); */
    }

    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        background-color: ${({ theme }) => theme.iconHeaderBGHover};
        width: 30px;
        height: 30px;
        border-radius: 100%;
        transform-origin: 50% 50%;
        transform: scale(0);
        transition: transform 0.2s ease-in;
    }
    .nav-drawer-open & {
        &:after {
            background-color: ${({ theme }) => theme.iconHeaderBGHover};
            transform: scale(1);
        }
    }
    &:hover {
        &:after {
            transform: scale(1);
            transition: transform 0.2s ease-out;
        }
        & .hamburger:before,
        & .hamburger:after,
        & .hamburger__center {
            background-color: ${({ theme }) => theme.iconHeader};
        }
    }
    .squeeze-menu & {
        display: none;
    }
    ${customMedia.greaterThan("lg")`
        display: none;
  `};
`
