import React from "react"
import {
    Container,
    LogoWrapper,
    LogoContainer,
    ItemContainer,
    Item,
} from "./styles/menu"

export default function Menu({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Menu.LogoWrapper = function MenuLogoWrapper({ children, ...restProps }) {
    return <LogoWrapper {...restProps}>{children}</LogoWrapper>
}
Menu.LogoContainer = function MenuLogoContainer({ children, ...restProps }) {
    return <LogoContainer {...restProps}>{children}</LogoContainer>
}
Menu.ItemContainer = function MenuItemContainer({ children, ...restProps }) {
    return <ItemContainer {...restProps}>{children}</ItemContainer>
}
Menu.Item = function MenuItem({ to, children, ...restProps }) {
    return (
        <Item {...restProps} to={to}>
            {children}
        </Item>
    )
}
