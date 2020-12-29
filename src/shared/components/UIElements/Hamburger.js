import React from "react"

import "./Hamburger.scss"

const Hamburger = props => {
    return (
        <div
            onClick={props.onClick}
            className={`hamburger ${props.className}`}
            styles={props.styles}
        >
            <div className="hamburger__center"></div>
        </div>
    )
}

export default Hamburger
