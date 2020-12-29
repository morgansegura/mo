import React from "react"
import "./CodeBlock.scss"

const CodeBlock = props => {
    return (
        <div className="browser-container">
            <div className="browser-nav">
                <div className="button--red" />
                <div className="button--yellow" />
                <div className="button--green" />
            </div>
            <div className="browser">
                <div className="browser-inner">{props.children}</div>
            </div>
        </div>
    )
}

export default CodeBlock
