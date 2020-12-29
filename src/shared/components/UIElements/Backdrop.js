import React from "react"
import ReactDOM from "react-dom"

import "./Backdrop.css"

const Backdrop = ({ onClick }) => {
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={onClick} role="none"></div>,
        document.getElementById("backdrop-hook")
    )
}

export default Backdrop
