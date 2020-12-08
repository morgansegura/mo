import React from "react"
// import { Link } from "gatsby"
import Logo from "../../assets/images/segura-icon.svg"

import { SiAboutDotMe } from "react-icons/si"
import { menu } from "../../fixtures"

import * as S from "./styles/menu"

export const MainNavigation = props => (
    <S.MainNavDrawer {...props}>
        <div className="h-24 flex flex-col justify-center text-center">
            <S.Logo className="mx-auto" to="/" title="Home" aria-label="Home">
                <Logo className="logo w-12 h-12 lg:mx-auto" />
            </S.Logo>
        </div>
        <div className="w-full grid grid-cols-1 text-center">
            {menu.map(({ id, title, label, path, icon }) => (
                <S.Item
                    key={id}
                    title={title}
                    to={path}
                    className="main-nav-item h-16 flex flex-col justify-center items-center border border-gray-500 hover:bg-color-400 transition ease-out duration-300"
                >
                    <div className="">{icon}</div>
                    <div className="font-normal text-xs uppercase">{label}</div>
                </S.Item>
            ))}
        </div>
    </S.MainNavDrawer>
)
