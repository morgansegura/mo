import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"

import { SVG } from "./styles/progress-bar"

export const CircularProgress = props => {
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
    } = props

    const center = size / 2
    const radius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * radius

    const [offset, setOffset] = useState(0)
    const circleRef = useRef(null)
    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference
        setOffset(progressOffset)
        circleRef.current.style =
            "transition: stroke-dashoffset 850ms ease-in-out;"
    }, [setOffset, circumference, progress, offset])

    return (
        <React.Fragment>
            <SVG className="svg" width={size} height={size}>
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    ref={circleRef}
                    className="svg-circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text className="svg-circle-text" x={center} y={center}>
                    {progress}%
                </text>
            </SVG>
        </React.Fragment>
    )
}
export const LineProgress = props => {
    const { label, progress, strokeWidth, lineOneStroke, lineTwoStroke } = props

    const lineLength = 100
    const fullLength = `${lineLength}%`

    const [offset, setOffset] = useState(0)

    const lineRef = useRef(null)
    useEffect(() => {
        const progressOffset = (100 - progress) * -1
        setOffset(progressOffset)

        console.log("Offset: ", progressOffset)
        lineRef.current.style =
            "transition: stroke-dashoffset 850ms ease-in-out;"
    }, [setOffset, lineLength, progress, offset])

    console.log("Offset: ", offset)

    return (
        <React.Fragment>
            <div className="svg-line-label-box">
                <p className="label">{label}</p>
                <p className="svg-line-text">{progress}%</p>
            </div>

            <SVG className="svg" width={fullLength} height={strokeWidth}>
                <line
                    className="svg-line-bg"
                    stroke={lineOneStroke}
                    x1={fullLength}
                    strokeWidth={strokeWidth}
                />
                <line
                    ref={lineRef}
                    className="svg-line"
                    stroke={lineTwoStroke}
                    x1={fullLength}
                    strokeWidth={strokeWidth}
                    strokeDasharray={fullLength}
                    strokeDashoffset={offset + "%"}
                />
            </SVG>
        </React.Fragment>
    )
}

CircularProgress.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired,
}
