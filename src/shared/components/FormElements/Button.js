import React from "react"
import { Link } from "gatsby"

import "./Button.scss"

const Button = ({
    children,
    href,
    size,
    inverse,
    danger,
    disabled,
    to,
    exact,
    type,
    onClick,
}) => {
    if (href) {
        return (
            <a
                className={`button button--${size || "default"} ${
                    inverse && "button--inverse"
                } ${danger && "button--danger"}`}
                href={href}
            >
                {children}
            </a>
        )
    }
    if (to) {
        return (
            <Link
                to={to}
                exact={exact}
                className={`button button--${size || "default"} ${
                    inverse && "button--inverse"
                } ${danger && "button--danger"}`}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            className={`button button--${size || "default"} ${
                inverse && "button--inverse"
            } ${danger && "button--danger"}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
