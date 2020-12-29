import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "../../hooks/use-dimensions"
import { MenuToggle } from "./MenuToggle"
import { Navigation } from "./Navigation"
import { Logo } from "../Logo/LogoContainer"

import "./MainNavigation.scss"

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 258px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

const MainNavigation = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)

    return (
        <header className="header">
            <Logo />
            <motion.nav
                className="main-navigation"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <motion.div
                    className="main-navigation__background"
                    variants={sidebar}
                />
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        </header>
    )
}

export default MainNavigation
