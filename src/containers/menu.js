import React from "react"
import Menu from "../components/menu"
import LogoImage from "../assets/images/segura-icon.svg"
import { menuList } from "../fixtures"

export function MenuContainer({ ...restProps }) {
    return (
        <Menu {...restProps}>
            <Menu.LogoWrapper className="h-24 flex flex-col justify-center text-center">
                <Menu.LogoContainer
                    className="mx-auto"
                    to="/"
                    title="Home"
                    aria-label="Home"
                >
                    <LogoImage className="logo w-12 h-12 lg:mx-auto" />
                </Menu.LogoContainer>
            </Menu.LogoWrapper>
            <Menu.ItemContainer className="w-full grid grid-cols-1 text-center">
                {menuList.map(({ id, title, label, path, icon }) => (
                    <Menu.Item
                        key={id}
                        title={title}
                        to={path}
                        className="main-nav-item h-16 flex flex-col justify-center items-center border border-gray-500 hover:bg-color-400 transition ease-out duration-300"
                    >
                        <div className="">{icon}</div>
                        <div className="font-normal text-xs uppercase">
                            {label}
                        </div>
                    </Menu.Item>
                ))}
            </Menu.ItemContainer>
        </Menu>
    )
}
