import React, { useState } from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { AnimatePresence } from "framer-motion"

import MainNavigation from "../components/Navigation/MainNavigation"
import Modal from "../components/UIElements/Modal"
import Button from "../components/FormElements/Button"

import "./Global.scss"

const DefaultLayout = ({ children, location }) => {
    const [showModal, setShowModal] = useState(false)

    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <div>
                <MainNavigation />
                <Button onClick={() => setShowModal(true)}>Click Me</Button>
                {children}
            </div>
        </>
    )
}

export default DefaultLayout
