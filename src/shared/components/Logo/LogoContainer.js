import React from "react"
import { Link } from "gatsby"

import { Icon } from "./LogoIcon"
import "./Logo.scss"

export const Logo = props => {
    if (props.to) {
        return (
            <Link
                className={`logo-container ${props.className}`}
                style={props.style}
                to={props.to}
            >
                <Icon />
            </Link>
        )
    } else {
        return (
            <div
                className={`logo-container ${props.className}`}
                style={props.style}
            >
                <Icon />
            </div>
        )
    }
}
