import React from "react"
import { AiOutlineCoffee, AiOutlineRead, AiOutlineApi } from "react-icons/ai"
export const menuList = [
    {
        id: "blog",
        title: "",
        label: "Blog",
        path: "/",
        icon: <AiOutlineRead />,
    },
    {
        id: "about",
        title: "",
        label: "About",
        path: "/about",
        icon: <AiOutlineCoffee />,
    },
    {
        id: "contact",
        title: "",
        label: "Connect",
        path: "/contact",
        icon: <AiOutlineApi />,
    },
]
