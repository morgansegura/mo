import React from "react"
// import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import Button from "../FormElements/Button"

import "./Modal.scss"

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}
const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "30vh",
        opacity: 1,
        transition: { delay: 0.5 },
    },
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className="modal" variants={modal}>
                        <p>Testing this modal</p>
                        <Button onClick={() => setShowModal(false)}>
                            Start Again
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
