import React from "react"
import { motion } from "framer-motion"

export const Icon = () => {
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
        },
    }

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="logo-svg"
        >
            <g id="Layer_26" data-name="Layer 26" className="logo-g">
                <motion.path
                    className="logo-path"
                    d="M1109.32-207.86l-2.77,12.78c7.08,4.57,11.86,13.17,11.86,23,0,14.65-10.54,26.53-23.53,26.53l-.78,0c-.63,0-1.25-.08-1.87-.16H1068l.21-1,1.72-8.15h24.17c.37,0,.75.05,1.14.05,8.48,0,15.36-7.64,15.36-17.06s-6.88-17.06-15.36-17.06H1064.6a4.12,4.12,0,0,1-3.89-4.31v-.34a4.12,4.12,0,0,1,3.89-4.32h34.05l.42-1.88,7.28-32.93h-41.7c-19.27,0-34.89,17.6-34.89,39.32,0,15.92,8.39,29.62,20.45,35.81l2.77-12.78c-7.09-4.57-11.86-13.17-11.86-23,0-14.65,10.53-26.52,23.53-26.52l.77,0c.63,0,1.25.07,1.87.15h24.23l-.21,1-1.72,8.15h-24.16c-.38,0-.76,0-1.14,0-8.49,0-15.36,7.64-15.36,17.06s6.87,17.06,15.36,17.06h30.64a4.12,4.12,0,0,1,3.88,4.32v.33a4.12,4.12,0,0,1-3.88,4.32h-34.06l-.41,1.88-7.29,32.94h41.71c19.26,0,34.88-17.61,34.88-39.33C1129.76-188,1121.38-201.67,1109.32-207.86Z"
                    transform="translate(-1017.71 238.77)"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                />
            </g>
        </motion.svg>
    )
}
