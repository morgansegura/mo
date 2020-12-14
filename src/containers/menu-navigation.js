import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Menu } from "../components"
import { menuList } from "../fixtures"
import { AiOutlineMore } from "react-icons/ai"

export function MenuNavigationContainer({ ...restProps }) {
    const [toggleModal, setToggleModal] = useState(false)

    return (
        <>
            <Menu {...restProps}>
                <Menu.ItemContainer className="w-full grid grid-cols-1 text-center">
                    {menuList.map(({ id, title, label, path, icon }) => (
                        <Menu.Item
                            key={id}
                            title={title}
                            to={path}
                            className="main-nav-item"
                        >
                            <div className="icon">{icon}</div>
                            <div className="label">{label}</div>
                        </Menu.Item>
                    ))}
                    <Menu.Item
                        onClick={() => setToggleModal(!toggleModal)}
                        title="Connect"
                        to="/"
                        className="main-nav-item"
                    >
                        <div className="icon">
                            <AiOutlineApi />
                        </div>
                        <div className="label">Connect</div>
                    </Menu.Item>
                </Menu.ItemContainer>
            </Menu>
        </>
    )
}
